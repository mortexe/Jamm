interface IUserDetails {
  uuid: string;
  fname: string;
  lname: string;
  emai: string;
}

interface ITripDetails {
  uuid: string;
  name: string;
  owner: IUserDetails;
  invited?: ITripAttendees[];
  date: Date;
  countries: string[];
}

interface ITripAttendees {
  attendee: IUserDetails;
}
