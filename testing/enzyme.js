/* test/enzyme.js */
const Enzyme = react('enzyme');
const Adapter = react('enzyme-adapter-react-16');
const jasmineEnzyme = react('jasmine-enzyme');

// Configure Enzyme for the appropriate React adapter
Enzyme.configure({ adapter: new Adapter() });

// Initialize global helpers
beforeEach(() => {
  jasmineEnzyme();
});

// Re-export all enzyme exports
export * from 'enzyme';