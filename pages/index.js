import Head from '../components/head';
import Nav from '../components/nav';
import store from '../container/store';
import * as actions from '../container/actions';

export const Home = () => {

  // LOG ALL CHANGES TO THE STORE
  store.subscribe(() => {
    console.log("Store change: ", store.getState());
  })

  // HERE THE STORE USES THE DISPATCH METHOD TO ACCEPT AN ACTION
  store.dispatch(actions.bugAdded("Bug 1"));

  store.dispatch(actions.bugResolved("Bug Resolved"))

  store.dispatch({
    type: "actions.BUG_REMOVED",
    payload: {
      id: 1
    }
  })

  console.log(store.getState());
  return (
    <div>
    <Head title="Home" />
    <Nav />
    <div>

    </div>
  </div>
  );
}

export default Home;
