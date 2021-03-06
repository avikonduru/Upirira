import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Alerts from '../components/Alerts';

// Pages
import Register from '../pages/Register';
import Login from '../pages/Login';
import Confirm from '../pages/Confirm';
import Dash from '../pages/Dash';
import Search from '../pages/Search';
import Settings from '../pages/Settings';
import Receiver from '../pages/receiverPages/Receiver';
import LostPassword from '../pages/passwordPages/ForgotPassword';
import NewPassword from '../pages/passwordPages/NewPassword';
import NotFound from '../pages/NotFound';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Utils
import PrivateRoute from './PrivateRoute';

const Routes = () => {
	return (
		<Fragment>
			<Container>
				<Alerts />
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<Route exact path='/confirm/:id' component={Confirm} />
					<Route exact path='/lostPassword' component={LostPassword} />
					<Route exact path='/newPassword/:id' component={NewPassword} />
					<PrivateRoute exact path='/dash' component={Dash} />
					<PrivateRoute exact path='/search' component={Search} />
					<PrivateRoute exact path='/receiver' component={Receiver} />
					<PrivateRoute exact path='/settings' component={Settings} />
					<Route component={NotFound} />
				</Switch>
			</Container>
		</Fragment>
	);
};

export default Routes;
