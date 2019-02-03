const React = require('react');
const reactclass = require('create-react-class');
const css = require('./slider-home.css')

class Slider extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
            switch: true,
            div_switch:true,
            slide_state: 0,
            compiled_content: [],
            content: {
                content1: {
                    title: 'Content One',
                    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                },
                content2: {
                    title: 'Content Two',
                    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
                }
            }
        };

        this.timeout = this.timeout.bind(this);
        this.compile = this.compile.bind(this);
        this.child_swap = this.child_swap.bind(this);

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
            menu.push(<div className={class_name+' slide_cont'}><h2>{value[i][1].title}</h2><div className='slider_class'>{value[i][1].content}</div></div>)
        }
        
        this.setState({compiled_content: menu})
    }

    child_swap(bool,state1) {
        let a = state1!==0?state1-1:0;
        let b = state1!==0?state1:state1+1

        let div1 = <div className={this.state.switch?'div1 slider_func':'div1 slider_func closed'}>{this.state.compiled_content[a]}</div>;
        let div2 = <div className={this.state.switch?'div2 slider_func closed':'div2 slider_func'}>{this.state.compiled_content[b]}</div>;

        let div3 = <div className={this.state.switch?'div1 slider_func closed':'div1 slider_func'}>{this.state.compiled_content[a]}</div>;
        let div4 = <div className={this.state.switch?'div2 slider_func':'div2 slider_func closed'}>{this.state.compiled_content[b]}</div>;
        if (bool) {
            return [div1, div2]
        } else {
            return [div3, div4]
        }
        
    }

    timeout() {
        let num = this.state.slide_state;
        let cont_len=this.state.compiled_content.length;
        let even = [1,2]
        if (even.includes(num)) {
            this.setState(prevState => ({
                switch: !prevState.switch
              }));
        }
        
        setTimeout(() => {
            if(num<cont_len-1) {
                num+=1;
            } else {
                num=0;
            }

            this.setState({slide_state:num})
                
            this.setState(prevState => ({
                switch: !prevState.switch
            }));
            
            this.timeout()
        },3000)

    }

    componentDidMount() {
        this.compile()
        this.timeout()
    }
    render() {

        return (
        <div className='slider-home_Container'>
            {/* <div className={this.state.div1?'div1 slider_func':'div1 slider_func closed'}>
                {this.state.compiled_content[this.state.slide_state]}
            </div>
            <div className={this.state.div2?'div2 slider_func':'div2 slider_func closed'}>
                {this.state.compiled_content[this.state.slide_state]}
            </div> */}
            <div className='outer'>
                {this.child_swap(this.state.div_switch,this.state.slide_state)}
            </div>
        </div>
        )
    }

}

module.exports = Slider;