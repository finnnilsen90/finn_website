const React = require('react');
const reactclass = require('create-react-class');
const css = require('./footer-home.css');

const github_logo = require('../../../../images/github_logo.jpg');
const linkedin_logo = require('../../../../images/linkedin_logo.jpg');
const gmail_logo = require('../../../../images/gmail_logo.jpg');

var ____Class17=React.Component;for(var ____Class17____Key in ____Class17){if(____Class17.hasOwnProperty(____Class17____Key)){Footer[____Class17____Key]=____Class17[____Class17____Key];}}var ____SuperProtoOf____Class17=____Class17===null?null:____Class17.prototype;Footer.prototype=Object.create(____SuperProtoOf____Class17);Footer.prototype.constructor=Footer;Footer.__superConstructor__=____Class17;
    
    function Footer(props) {"use strict";
    ____Class17.call(this,props);
    this.state = {
            test: '',
            toggle: true
        };

        this.git_link = this.git_link.bind(this);
        this.linkd_link = this.linkd_link.bind(this);
        this.gmail_link = this.gmail_link.bind(this);
       
    }
     
    Object.defineProperty(Footer.prototype,"git_link",{writable:true,configurable:true,value:function() {"use strict";
        let link = document.querySelector('.git_link');
        
        let state = this.state.toggle;
        if (state) {
            link.style.display = 'block';

            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        } else {
            link.style.display = 'none';

            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        }
    }});

    Object.defineProperty(Footer.prototype,"linkd_link",{writable:true,configurable:true,value:function() {"use strict";
        let link = document.querySelector('.linkedin_link');
        
        let state = this.state.toggle;
        if (state) {
            link.style.display = 'block';

            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        } else {
            link.style.display = 'none';

            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        }
    }});

    Object.defineProperty(Footer.prototype,"gmail_link",{writable:true,configurable:true,value:function() {"use strict";
        let link = document.querySelector('.gmail_link');
        
        let state = this.state.toggle;
        if (state) {
            link.style.display = 'block';

            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        } else {
            link.style.display = 'none';

            this.setState(function(prevState)  {return {
                toggle: !prevState.toggle
            };});
        }
    }});

    Object.defineProperty(Footer.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {"use strict";
        
    }});

    Object.defineProperty(Footer.prototype,"render",{writable:true,configurable:true,value:function() {"use strict";

        return (
        React.createElement("div", {className: 'footer-home_Container'+' font'}, 
            React.createElement("div", {className: "logo_cont"}, 
                React.createElement("a", {href: "https://github.com/finnnilsen90"}, 
                    React.createElement("img", {className: "github_logo", src: github_logo, onMouseEnter: this.git_link, onMouseLeave: this.git_link})
                ), 
                
                React.createElement("a", {href: "https://www.linkedin.com/in/finn-nilsen-50815182/"}, 
                    React.createElement("img", {className: "linkedin_logo", src: linkedin_logo, onMouseEnter: this.linkd_link, onMouseLeave: this.linkd_link})
                ), 
                React.createElement("a", {href: "mailto:fnilsen1051@gmail.com"}, 
                    React.createElement("img", {className: "gmail_logo", src: gmail_logo, onMouseEnter: this.gmail_link, onMouseLeave: this.gmail_link})
                )
            ), 
            React.createElement("div", {className: "link_cont"}, 
                React.createElement("p", {className: "git_link"}, "https://github.com/finnnilsen90"), 
                React.createElement("p", {className: "linkedin_link"}, "https://www.linkedin.com/in/finn-nilsen"), 
                React.createElement("p", {className: "gmail_link"}, "fnilsen1051@gmail.com")
            )
        )
        )
    }});



module.exports = Footer;