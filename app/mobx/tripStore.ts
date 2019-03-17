import { observable } from 'mobx';

class TripStore {
  @observable public trip = ['this is a new trip'];
}

const observableTripStore = new TripStore();
export default observableTripStore;
