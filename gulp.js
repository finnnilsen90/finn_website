let gulp = require('gulp'),
    optimist = require('optimist'),
    DefinePlugin = require('webpack').DefinePlugin,
    path = require('path'),
    deletefile = require('gulp-delete-file'),
    ShakePlugin = require('webpack-common-shake').Plugin,
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    fs = require('fs'),
    $ = require('gulp-load-plugins')();

const webpack = require('webpack-stream');
const editJsonFile = require('edit-json-file');

let site_map = require('./site_map.json');

//Command line variable naming
let compName = optimist.argv.comp || 'templates'; //Component name 
let child = optimist.argv.child || 'Libcomp'; //child component name to put into lib folder of component 
let folder = optimist.argv.test || compName; //folder name used to test and develop template files
let env = optimist.argv.env || 'development' //Defines the environment.
let folder_type = optimist.argv.loc || 'app'
let plugin_bool = optimist.argv.build || false; //Tells whether or not the webpack build is production of develpment
let username_var = optimist.argv.user //State user to put in the database
let email_var = optimist.argv.email //State email to put in the database
let password_var = optimist.argv.password //State password to put in the database
let platform = optimist.argv.plat //State platform bulk build is meant for
let bulk = optimist.argv.bulk //State bulk build yes for true

let varArr = compName.split('-').slice(0) //arrar for class name of component
let childArr = child.split('-').slice(0) //array for class name for child component
let varName = varArr[0].charAt(0).toUpperCase() + varArr[0].slice(1); //class name for component 
let newChild = childArr[0].charAt(0).toUpperCase() + childArr[0].slice(1,30); //class name for child component 
let newChild_low = childArr[0].charAt(0).toLowerCase() + childArr[0].slice(1,30); //class name in lower case for for compnonent

//Error message to notify if a component is named the same.
if (newChild === varName) { console.error('\x1b[41m%s\x1b[0m', 'Your parent component is the same name as your child component!')}

//Destination file config.
const config = {
        dest: {
            test: './components/' + folder + '/test/', //unit testing files
            test_file: './components/' + folder + '/test/', //unit testing files
            testChild: './components/' + folder + '/lib/' + child + '/test/', //unit testing for child component
            testChild_file: './components/' + folder + '/lib/' + child + '/test/', //unit testing for child component
            html: './components/' + folder + '/example/', //folder for the html file and the bundled component
            bundle: './components/' + folder + '/example/', //folder where the bundled js file is stored
            dev: './components/' + folder + '/', //components folder
            lib: './components/lib/' + folder + '/', //child components folder
            Makelib: './components/lib/' + child + '/', //library components folder
            MakelibTest: './components/lib/' + child + '/test/', //unit test folder for library components
            MakelibTest_file: './components/lib/' + child + '/test/', //unit test folder for library components
            prod: './public/', //public folder used for production
            prodjs: './public/' + folder_type + '/', //public folder used for production javascript
            prodjpg: './public/images/', //public folder used for production images
            components: './components/' + folder + '/lib/' + child + '/' //lib folder for child components in each parent component
        }
    };

//How to name components.
gulp.task('how-to', function() {
    console.log('------------------------------------------------------------------------------');
    console.log('Before you start each component please label the following in the command line');
    console.log('before running this gulp file.');
    console.log('');
    console.log('name component => --comp compName-webPage');
    console.log('');
    console.log('Command should look like below when you make a new component.');
    console.log('gulp makeComponent --comp compName-webPage --gulpfile gulp.js');
    console.log('------------------------------------------------------------------------------');
})

//Gulp commands
gulp.task('task-list', function() {
    console.log('------------------------------------------------------------------------------');
    console.log('Below is a list of tasks for this gulp file.');
    console.log('');
    console.log('makeComponent => Makes a component file structure for a web page and puts the');
    console.log('                 component in the components folder.');
    console.log('                 Should have the following commands to invoke.');
    console.log('                 gulp makeComponent --comp "parent" --child "child" --gulpfile gulp.js');
    console.log('');
    console.log('makeChild => Makes a component child for a parent component.');
    console.log('             Should have the following commands to invoke.');
    console.log('             gulp makeChild --comp "component" --child "child" --gulpfile gulp.js');
    console.log('');
    console.log('makeLib => Makes a library component, which is a component that shows up on many components.');
    console.log('           Should have the following commands to invoke.');
    console.log('           gulp makeLib --child "lib" --gulpfile gulp.js');
    console.log('');
    console.log('watchJSX => Converts JSX files in a compnent folder into a js file.');
    console.log('            Should have the following commands to invoke.');
    console.log('            gulp watchJSX --comp "component" --child "child" --gulpfile gulp.js');
    console.log('');
    console.log('libJSX => Converts JSX files in a lib compnent folder into a js file.');
    console.log('            Should have the following commands to invoke.');
    console.log('            gulp watchJSX --comp "component" --child "child" --gulpfile gulp.js');
    console.log('');
    console.log('watchLess => Compiles less into css');
    console.log('');
    console.log('libLess => Compiles lib less files into css');
    console.log('');
    console.log('webpack => bundles js, css, and image files into a component.');
    console.log('');
    console.log('production => Takes all files in the example file and minifies them.');
    console.log('');
    console.log('');
    console.log('bulk builds => goes through all of the components and builds them.');
    console.log('set --bulk variable to yes');
    console.log('set --plat variable to whatever platform you are building so it doesnt build other files.');
    console.log('');
    console.log('\x1b[41m%s\x1b[0m','YOU NEED TO USE THE FOLLOWING NAMEING CONVETNION FOR CREATING COMPONENTS!!!');
    console.log('');
    console.log('component => component-website');
    console.log('child => child-component');
    console.log('lib component => lib-website');
    console.log('------------------------------------------------------------------------------');
})

//Used for optimisation purposes during gulp production.
gulp.task('test', function() {

    console.log('--- child ---')
    console.log('')
    console.log('compname ==> ', compName);
    console.log('varName ==> ', varName);
    console.log('VarName ==> ', varName);
    console.log('child ==> ', child);
    console.log('ChildConst ==> ',newChild );
    console.log('newChildConst ==> new',newChild );
    console.log('libcomp ==> ', newChild_low);
    console.log('newLib ==> ', 'new', newChild_low);
    console.log('child_Container ==> ', newChild + '_Container');
    console.log('')
    console.log('--- component ---')
    console.log('')
    console.log('compname ==> ', compName);
    console.log('varName ==> ', varName);
    console.log('VarName ==> ', varName);
    console.log('child ==> ', child);
    console.log('ChildConst ==> ', newChild);
    console.log('libcomp ==> ', newChild_low);
})

//create component.
gulp.task('makeComponent', makeComponent);

gulp.task('makeChild', makeChild)

gulp.task('makeLib', libComp)
//Send development files to production folder as a watch task.
gulp.task('watchJSX', watchJSX)

gulp.task('watchLess', watchLess)

gulp.task('libJSX', libJSX)

gulp.task('libLess', libLess)

gulp.task('webpack', webpack_build)

gulp.task('webpack_production', webpack_production)

//production
gulp.task('production', production)

//Server
gulp.task('dev_server', node_dev)

gulp.task('server', node)

//Database
gulp.task('create_user', create_user)
gulp.task('create_password', create_password)

gulp.task('test_function', add_to_map)


gulp.task('finish', ['webpack', 'production']);

//////////////////////// Gulp Functions ////////////////////////

function add_to_map() {
    let file = editJsonFile(`${__dirname}/site_map.json`);
    file.set(folder_type + '.' + compName, compName);
    file.save();
}

//replace() holds all of the child and lib component protocol for creating a component. 
function replace(source, destin, base, test) {

    if (base === true) {
        gulp.src(source)
            .pipe($.replace('compName', compName))
            .pipe($.replace('templates', compName))
            .pipe($.replace('varName', varName)) 
            .pipe($.replace('VarName', varName)) 
            .pipe($.replace('Libcomp', child))
            .pipe($.replace('ChildConst', newChild))
            .pipe($.replace('newChildConst', 'new' + newChild))
            .pipe($.replace('libcomp', newChild_low))
            .pipe($.replace('newLib', 'new' + newChild_low))
            .pipe($.replace('child_Container', newChild + '_Container'))
            .pipe($.rename({
                basename: test===true?child+'.test':child 
            }))
            .pipe(gulp.dest(destin))
    } else {
        gulp.src(source)
            .pipe($.replace('compName', compName))
            .pipe($.replace('templates', compName))
            .pipe($.replace('varName', varName)) 
            .pipe($.replace('VarName', varName)) 
            .pipe($.replace('Libcomp', child))
            .pipe($.replace('ChildConst', newChild))
            .pipe($.replace('newChildConst', 'new' + newChild))
            .pipe($.replace('libcomp', newChild_low))
            .pipe($.replace('newLib', 'new' + newChild_low))
            .pipe($.replace('child_Container', newChild + '_Container'))
            .pipe(gulp.dest(destin))       
    }
}

function makeChild() {

    replace('./components/templates/lib/Libcomp/Libcomp.*', config.dest.components, true)
    replace('./components/templates/lib/Libcomp/test/libcomp-child.test.js', config.dest.testChild_file, true, true)
    replace('./components/templates/lib/Libcomp/test/configure.json', config.dest.testChild)
    console.log('---------------------------------------');
    console.log('New child component ' + newChild)
    console.log('Add link to main component(s).');
    console.log('---------------------------------------'); 

}

function libComp() {

    replace('./components/templates/lib/Libcomp/Libcomp.*', config.dest.Makelib, true)
    replace('./components/templates/lib/Libcomp/test/libcomp-child.test.js', config.dest.MakelibTest_file, true, true)
    replace('./components/templates/lib/Libcomp/test/configure.json', config.dest.MakelibTest)
    console.log('---------------------------------------');
    console.log('New global lib component ' + newChild)
    console.log('Add link to main component(s).');
    console.log('---------------------------------------'); 

}

//Create a new component.
function makeComponent() {
    
    let varName = varArr[0].charAt(0).toUpperCase() + varArr[0].slice(1); 
    let test_var = varArr[0]
    let newVarName = 'new' + varName;

    console.log('---------------------------------------');
    console.log('check nameing of the files and folders.');
    console.log('check nameing of the variables.');
    console.log('---------------------------------------');
    console.log('---------------------------------------');
    console.log('component => ' + compName)
    console.log('folder type => ' + folder_type)
    console.log('component class/variable => ' + varName)
    console.log('Add link to main component(s).');
    console.log('---------------------------------------'); 

    function replace_comp(source, dest, base, test) {
        if (base === true) {
            gulp.src(source)
                .pipe($.replace('compName', compName))
                .pipe($.replace('templates', compName))
                .pipe($.replace('varName', varName)) 
                .pipe($.replace('VarName', varName))
                .pipe($.replace('varNameConst', 'new' + varName))
                .pipe($.replace('Libcomp', child))
                .pipe($.replace('ChildConst', newChild))
                .pipe($.replace('libcomp', newChild_low))
                .pipe($.rename({basename: test===true?test_var+'.test':compName,}))
                .pipe(gulp.dest(dest));
        } else {
            gulp.src(source)
                .pipe($.replace('compName', compName))
                .pipe($.replace('templates', compName))
                .pipe($.replace('varName', varName))
                .pipe($.replace('VarName', varName)) 
                .pipe($.replace('varNameConst', 'new' + varName))
                .pipe($.replace('Libcomp', child))
                .pipe($.replace('ChildConst', newChild))
                .pipe($.replace('libcomp', newChild_low))
                .pipe(gulp.dest(dest));
        }
            
    }

    replace_comp('./components/templates/test/templates-comp.test.js', config.dest.test_file, true, true)
    replace_comp('./components/templates/test/configure.json', config.dest.test)
    replace_comp('./components/templates/example/*', config.dest.html)
    replace_comp('./components/templates/templates.*', config.dest.dev, true)
    add_to_map()
    makeChild();
};

function watchJSX() {
   
    let folderName = folder || compName;

    function components() {return $.watch('./components/' + folderName + '/*.jsx', { ignoreInitial: true})
            .pipe($.react({harmony: true, es6module: true}))
            .pipe(gulp.dest(config.dest.dev))
    }

    function components_child() {return $.watch('./components/' + folderName + '/lib/' + child + '/' + child + '.jsx', { ignoreInitial: true})
            .pipe($.react({harmony: true, es6module: true}))
            .pipe(gulp.dest(config.dest.components))
    }
    components()
    components_child()

    console.log('---------------------')
    console.log('comp => ',folderName)
    console.log('child => ',child)
    console.log('---------------------')
}

function libJSX() {
    let folderName = folder || compName;

    function components() {return $.watch('./components/lib/' + folderName + '/*.jsx', { ignoreInitial: true})
            .pipe($.react({harmony: true, es6module: true}))
            .pipe(gulp.dest(config.dest.lib))
    }
    components()

    console.log('---------------------')
    console.log('lib => ',folderName)
    console.log('---------------------')
}

function watchLess() {

    let folderName = folder || compName;

    function component_css() {return $.watch('./components/' + folderName + '/*.less', {})
            .pipe($.less())
            .pipe(gulp.dest(config.dest.dev))
    }
    function component_css_child() {return $.watch('./components/' + folderName + '/lib/' + child + '/' + child + '.less', {})
            .pipe($.less())
            .pipe(gulp.dest(config.dest.components))
    }
    component_css()
    component_css_child()

    console.log('---------------------')
    console.log('comp => ',folderName)
    console.log('child => ',child)
    console.log('---------------------')
}


function libLess() {

    let folderName = folder || compName;

     console.log('comp => ',folderName)
    function component_css() {return $.watch('./components/lib/' + folderName + '/*.less', {})
            .pipe($.less())
            .pipe(gulp.dest(config.dest.lib))
    }
    component_css()

    console.log('---------------------')
    console.log('comp => ',folderName)
    console.log('---------------------')
}

function production(comp) {

    let fileName = comp || compName;
   
    gulp.src('./components/' + fileName + '/example/index.html')
        .pipe($.replace(compName + '-bundle.js', './' + fileName + '-bundle.js'))
        .pipe($.rename({basename: fileName,}))
        .pipe(gulp.dest(config.dest.prod))

    gulp.src('./components/' + fileName + '/example/*.jpg')
        .pipe(gulp.dest(config.dest.prodjpg))

    console.log('---------------------')
    console.log('folderName => ',fileName)
    console.log('compName => ',compName)
    console.log('---------------------')
};

function webpack_build() {

    function webpack_config(comp) { 

        let fileName = comp || 'templates';

        console.log('---------------------')
        console.log('comp => ',fileName)
        console.log('---------------------')
        
        return gulp.src('./components/' + fileName + '/' + fileName + '.js')
        .pipe(webpack({
            output: {
                filename: fileName + '-bundle.js',
            },
            devtool: 'source-map',
            plugins: [
                new UglifyJSPlugin({
                    sourceMap: true
                })
            ],
            module:  {
                loaders: [
                    {exclude: ['node_modules'], loader: 'babel-loader', test: /\.jsx?$/},
                    {loader: 'style-loader!css-loader', test: /\.css$/},
                    {loader: 'url-loader', test: /\.gif$/},
                    {loader: 'file-loader', test: /\.(ttf|eot|svg|jpg)$/},
                ],
            },
        }))
        .pipe(gulp.dest(config.dest.bundle));
    }

    if (bulk==='yes') {
        let folderName = fs.readdirSync(__dirname + '/components/');
        console.log('invoking bulk development build');

        for (let x = 0;x < folderName.length; x++) {

            let run_comp = folderName[x];
            let re = new RegExp(platform);

            if (re.test(run_comp)) {
                webpack_config(run_comp)
            }
        }
    }
    else
    {
        console.log('invoking development build')
        webpack_config()
    }
    
}

function webpack_production() {

    function webpack_config(comp) {

        let fileName = comp || compName;

        return gulp.src('./components/' + fileName + '/' + fileName + '.js')
            .pipe(webpack({
                output: {
                    filename: fileName + '-bundle.js',
                },
                devtool: 'source-map',
                plugins: [
                    new DefinePlugin({
                        'process.env': {
                            'NODE_ENV': JSON.stringify('production') 
                        }      
                    }),
                    new UglifyJSPlugin({
                        sourceMap: false
                    })
                ],
                module:  {
                loaders: [
                    {exclude: ['node_modules'], loader: 'babel-loader', test: /\.jsx?$/},
                    {loader: 'style-loader!css-loader', test: /\.css$/},
                    {loader: 'url-loader', test: /\.gif$/},
                    {loader: 'file-loader', test: /\.(ttf|eot|svg|jpg)$/},
                    ],
                },
            }))
            .pipe(gulp.dest(config.dest.prodjs));
    }


    if (bulk==='yes') {
        let folderName = Object.entries(site_map.app);
        if (folder_type==='admin') {
            folderName = Object.entries(site_map.admin);
        } else if (folder_type==='general') {
            folderName = Object.entries(site_map.general);
        } 
            
        console.log('\x1b[41m%s\x1b[0m', 'invoking bulk production build')

        for (let x = 0;x < folderName.length; x++) {

            let run_comp = folderName[x][1];
 
            console.log('completed comp => ' + run_comp)
            webpack_config(run_comp)
            production(run_comp)
        }
    }
    else
    {
        console.log('\x1b[41m%s\x1b[0m', 'invoking production build')
        console.log('---------------------')
        console.log('comp => ',compName)
        console.log('type ==> ',folder_type)
        console.log('---------------------')
        webpack_config()
        production(compName)
    }
    
}

function node() {
    
    $.nodemon ({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': env }
    })
}

function node_dev() {

    $.nodemon ({
        script: 'dev-server/dev-server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': env }
    })
};

function create_user() {

    const User = require('./models/user');

    console.log('---------------------')
    console.log('Create User')
    console.log('username => ',username_var)
    console.log('email ==> ',email_var)
    console.log('password ==> ',password_var)
    console.log('---------------------')

    User.create({
        ID:1000,
        first_name: "Finn",
        last_name: "Nilsen",
        username: email_var,
        email: email_var,
        password: password_var,
        user_type: "admin"
    })

};

function create_password() {

    const bcrypt = require('bcrypt');

    console.log('---------------------')
    console.log('password ==> ',password_var)
    console.log('---------------------')

    const salt = bcrypt.genSaltSync();

    console.log(bcrypt.hashSync(password_var, salt));


};