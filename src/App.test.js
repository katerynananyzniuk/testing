import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {App} from './App'
import {Character} from './Character'

configure({
  adapter: new Adapter
})

describe('<App/>', () => {

  let wrapper = shallow(<App />)

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('should render 3 char on light side', () => {
    expect(wrapper.find(Character)).toHaveLength(3)
  })
  it('should render 3 char on dark side', () => {
    wrapper.setProps({side: 'dark'})
    expect(wrapper.find(Character)).toHaveLength(3)
  })
})
