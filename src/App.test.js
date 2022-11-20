import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {App} from './App'
import {Character} from './Character'

configure({
  adapter: new Adapter
})

describe('<App/>', () => {
  it('should render 3 char on light side', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find(Character)).toHaveLength(3)
  })
  it('should render 3 char on dark side', () => {
    const wrapper = shallow(<App side={'dark'}/>)

    expect(wrapper.find(Character)).toHaveLength(2)
  })
})
