import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService extends InMemoryDbService {

  createDb() {
    const sites = [
      {name: 'passenger', url: 'testUrl'},
      {name: 'lust for life', url: 'test2Url'}
    ];
    return {sites};
  }
}
