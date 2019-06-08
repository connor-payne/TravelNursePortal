import { Switch, Route} from 'react-router-dom';
import Layout from './Layouts/Layout';
import ProfileBuilder from './Components/ProfileBuilder/ProfileBuilder';

import React from 'react'
import PropTypes from 'prop-types'

class Routes extends React.Component {
  render () {
    return (
      <Layout>
        <Switch>
          <Route resricted={false}  path="/profile" exact component={ProfileBuilder}/>
        </Switch>
      </Layout>
    )
  }
}

export default Routes;
