const React = require('react');
const ReactTestUtils = require('react-dom/test-utils');
const renderer = require('react-test-renderer')
let { shallow, mount, render } = require('enzyme');
const sinon = require('sinon');

const Box = require('../box-login.js');
const Button_one = require('../../../../lib/button-one/button-one.js');

let newBox = new Box();

// beforeEach(() => {
//     document = {
//       ...document,
//       addEventListener: () => { },
//       removeEventListener: () => { }
//     }
//   })
console.log('\x1b[41m%s\x1b[0m', 'CLICK IS NOT TESTED!')

afterEach(() => {
    const wrapper = mount(<Box />);
    wrapper.setState({err_message: []})
  })

let click = {
    preventDefault: () => {}
}

describe('component connection', () => {

    it('should be defined', () => {
        expect(Box).toBeDefined();
    })

    it('for button should be defined', () => {
        expect(Button_one).toBeDefined();
    })

})  
    
describe('<Box />', () => {

    const wrapper = mount(<Box />, { attachTo: document.body });

    it('renders components', () => {
        expect(wrapper).toMatchSnapshot();
    });

})

describe('<Button_one/>', () => {
    const Button_test = shallow(<Button_one name='Login' href='./' type='submit' value='Login'/>, { attachTo: document.body })
    const wrapper = mount(<Box />, { attachTo: document.body });
    const button = wrapper.find('.submit_log');

    it('button should be defined', () => {
        expect(button).toHaveLength(1)
    })

    it('should render props', () => {
        expect(Button_test).toMatchSnapshot();
    })
})

describe('Login functionality', () => {

    const Login = render(<Box />, { attachTo: document.body })
    const input_user = Login.find('.input_user')
    const input_pass = Login.find('.input_pass')

    it('should submit username', () => {
        expect(input_user.length).toBe(1);
    })

    it('should submit pass', () => {
        expect(input_pass.length).toBe(1);
    })

    it('should display msg_container class', ()=> {
        const wrapper = mount(<Box />, { attachTo: document.body });
        wrapper.instance().server_login(click);
        const msg_container = wrapper.find('.msg_container');
        expect(msg_container).toHaveLength(1);
    })
})

// describe('error message format', () => {
//     const wrapper = mount(<Box />, { attachTo: document.body });
//     let input = ["Please input a username", "Please input a password"];
//     let output = `<p>Please input a username</p>
//                   <p>Please input a username</p>`

//     it('should output 2 <p>', () => {
//         expect(wrapper.instance().format_msg(input)).toEqual(output)

//     })
// })

describe('Login authentification', () => {

    let user = 'test@gmail.com',
        pass = 'test;'


    it('should throw error if password input is blank', () => {
        const wrapper = mount(<Box />, { attachTo: document.body });
        wrapper.state().auth_status = 'blank_password';
        wrapper.instance().server_login();
        expect(wrapper.state().err_message.length).toBeGreaterThan(0)
    })

    it('no username message should be', () => {
        const wrapper = mount(<Box />, { attachTo: document.body });
        wrapper.state().auth_status = 'blank_password';
        wrapper.instance().server_login();
        expect(wrapper.state().err_message[0]).toEqual("Please input a password")
    })

    it('should throw error if username input is blank', () => {
        const wrapper = mount(<Box />, { attachTo: document.body });
        wrapper.state().auth_status = 'blank_username';
        wrapper.instance().server_login();
        expect(wrapper.state().err_message.length).toBeGreaterThan(0)
    })

    it('no username message should be', () => {
        const wrapper = mount(<Box />, { attachTo: document.body });
        wrapper.state().auth_status = 'blank_username';
        wrapper.instance().server_login();
        expect(wrapper.state().err_message[0]).toEqual("Please input a username")
    })

    // it('should throw error if invalid username and password', done => {
    //     const wrapper = mount(<Box />, { attachTo: document.body });
    //     wrapper.state().auth_status = 'wrong_username';
    //     wrapper.instance().server_login(click,user,pass);
    //     function callback_one() {
    //         let call_data = wrapper.state().err_message.length;
    //         expect(call_data).toEqual(1);
    //         done()
    //     } 

    //     wrapper.state().auth_status = 'wrong_password';
    //     function callback_two() {
    //         let call_data = wrapper.state().err_message.length;
    //         expect(call_data).toEqual(1);
    //         done()
    //     } 
    //     setTimeout(() => {
    //         callback_one()
    //         callback_two()
    //     },3000)
        
    // })

    it('should throw error if invalid username', () => {
        const wrapper = mount(<Box />, { attachTo: document.body });
        wrapper.state().auth_status = 'wrong_username';
        wrapper.instance().server_login(user,pass);
        expect(wrapper.state().err_message.length).toEqual(1);
    })

    it('should throw error if invalid password', () => {
        const wrapper = mount(<Box />, { attachTo: document.body });
        wrapper.state().auth_status = 'wrong_password';
        wrapper.instance().server_login(user,pass);
        expect(wrapper.state().err_message.length).toEqual(1);
    })

})