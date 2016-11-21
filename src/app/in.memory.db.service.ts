import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let workers = [
    {
	"id": 1001,
	"firstname": "Cyril",
	"lastname": "Ajieh",
	"gender": "M",
	"address": "3908 SW Feather St., Bentonville, AR 72712",
	"phone": "2001230000",
	"email": "july7@cyrilajieh.com",
	"serviceUnit": "Prayers",
	"birthday": "07-08-1990",
	"joined": "11-19-2016"

}, {
	"id": 1002,
	"firstname": "Faith",
	"lastname": "Ajieh",
	"gender": "F",
	"address": "3908 SW Feather St., Bentonville, AR 72712",
	"phone": "3001230000",
	"email": "faith3@cyrilajieh.com",
	"serviceUnit": "Sanctuary",
	"birthday": "03-02-1993",
	"joined": "11-21-2016"

}, {
	"id": 1003,
	"firstname": "Meekness",
	"lastname": "Cyril",
	"gender": "M",
	"address": "3308 SW Feather St., Bentonville, AR 72712",
	"phone": "3001230000",
	"email": "meek4@cyrilajieh.com",
	"serviceUnit": "Children",
	"birthday": "07-08-2060",
	"joined": "11-19-2016"

}, {
	"id": 1004,
	"firstname": "Love",
	"lastname": "Peter",
	"gender": "F",
	"address": "3708 SW Feather St., Bentonville, AR 72712",
	"phone": "3001230000",
	"email": "meek4@cyrilajieh.com",
	"serviceUnit": "Children",
	"birthday": "07-08-2000",
	"joined": "11-22-2016"

}, {
	"id": 1005,
	"firstname": "Isaac",
	"lastname": "Favor",
	"gender": "M",
	"address": "1008 SW Feather St., Bentonville, AR 72712",
	"phone": "4001230000",
	"email": "meek4@cyrilajieh.com",
	"serviceUnit": "Choir",
	"birthday": "04-08-2001",
	"joined": "11-29-2016"

}];
return {workers};
  }
}



