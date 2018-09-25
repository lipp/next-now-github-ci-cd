import {shallow} from 'enzyme'
import Index from '../../pages/index'

describe('The index page', () => {
  it('renders "Welcome"', () => {
    const wrapper = shallow(<Index />)
    expect(wrapper.text()).toMatch(/Welcome.+Next/)
  })
})
