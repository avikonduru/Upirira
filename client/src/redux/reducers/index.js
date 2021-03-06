import { combineReducers } from 'redux';

// Reducers
import alert from './alertReducer';
import auth from './authReducer';
import metrics from './metricsReducer';
import graph from './graphReducer';
import receivers from './receiversReducer';
import plaid from './plaidReducer';
import selected from './selectedReducer';
import password from './passwordReducer';
import spendingLimit from './spendingLimitReducer';

export default combineReducers({
	alert,
	auth,
	metrics,
	graph,
	receivers,
	plaid,
	selected,
	password,
	spendingLimit
});
