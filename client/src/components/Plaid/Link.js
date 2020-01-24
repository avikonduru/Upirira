import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PlaidLink from 'react-plaid-link';

// Redux
import { connect } from 'react-redux';
import { setPublicToken } from '../../redux/actions/plaidAction';

// Bootstrap
import Card from 'react-bootstrap/Card';

const Link = ({ setPublicToken }) => {
	const handleOnSuccess = (public_token, metadata) => {
		// send token to client server
		const account_id = metadata.account_id;
		const name = metadata.account.name;
		setPublicToken(public_token, account_id, name);
	};

	const handleOnExit = () => {};

	return (
		<Fragment>
			<Card className='shadow-sm'>
				<Card.Body>
					<PlaidLink
						clientName='React Plaid Setup'
						env='sandbox'
						product={['auth', 'transactions']}
						publicKey='18d9205e9c8060e88c9d25163276e6'
						webhook='https://webhook.site/d0d9f89c-9b6a-4c5e-9652-19521b4d8160'
						onExit={handleOnExit}
						onSuccess={handleOnSuccess}
						className='test'
					>
						Connect your bank
					</PlaidLink>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

Link.propTypes = {
	plaid: PropTypes.object.isRequired,
	setPublicToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	plaid: state.plaid
});

const mapActionsToProps = {
	setPublicToken
};

export default connect(mapStateToProps, mapActionsToProps)(Link);
