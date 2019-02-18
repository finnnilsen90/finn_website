const React = require('react');
const reactclass = require('create-react-class');
const css = require('./slider-home.css')

class Slider extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            content: {
                content1: {
                    title: 'Resume',
                    link: '/resume',
                    content: 'Click to see my resmue!'
                },
                content2: {
                    title: 'Projects',
                    link: '/project',
                    content: 'Checkout some of the projects I have been apart of.'
                },
                content3: {
                    title: 'Contact',
                    link: '/contact',
                    content: 'If you would like to contact me click now.'
                }
            }
        };

        this.compile = this.compile.bind(this);

    }

    compile() {
        let content = this.state.content;
        let value = Object.entries(content);
        let menu = [];
        let iter = 0;
        for(let i=0;i<value.length;i++) {
            iter+=1;
            let pos = 'content'+iter.toString()
            let class_name = 'slide'+iter.toString()
            menu.push(<div className={class_name+' slide'}><a href={value[i][1].link}><h2>{value[i][1].title}</h2><div className='slider_class'>{value[i][1].content}</div></a></div>)
        }
        
        return menu
    }
  
    componentDidMount() {
   
    }
    render() {

        return (
        <div className={'slider-home_Container'+' font'}>
            <div className='outer'>
                {this.compile()}
            </div>
        </div>
        )
    }

}

module.exports = Slider;