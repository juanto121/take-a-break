import React from 'react'
import Theme from './shared/Theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Start from './containers/start/Start'
import styled from 'styled-components'
import './App.css'
import Session from './containers/session/Session'
import AuthProvider from './shared/Auth'

const AppContainer = styled.div`
  background-color: ${p => p.theme.colors.darkgreen};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
`

function App() {
  return (
    <Theme>
      <AuthProvider>
        <Router>
          <AppContainer>
            <Content>
              <Route path={'/'} exact>
                <Start/>
              </Route>
              <Route path={'/break-session'} exact>
                <Session/>
              </Route>
            </Content>
          </AppContainer>
        </Router>
      </AuthProvider>
    </Theme>
  )
}

export default App
