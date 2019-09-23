import { faEdit, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/preact'
import { Nav, Main } from '@rate/atoms'
import { Wrapper, Inner } from '.'

storiesOf('templates', module)
  .add('Default', () => (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <a href="#" className="active">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faEdit} />
            </a>
          </li>
        </ul>
      </Nav>
      <Main />
    </Wrapper>
  ))
  .add('SignIn', () => (
    <Wrapper>
      <Inner />
    </Wrapper>
  ))
