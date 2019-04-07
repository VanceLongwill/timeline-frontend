import { getTestBed, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpMock: HttpTestingController;
  let service: ApiService;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const apiService: ApiService = TestBed.get(ApiService);
    expect(apiService).toBeTruthy();
  });

  it('should return an Observable<Message[]> with timestamps converted to date objects', () => {
    const date = new Date();
    const dummyMessages = [
      {
        id: '123',
        body: 'zda asdasd',
        author: 'asdasd',
        createdAt: date.getTime(),
      },
    ];

    const outputMessages = [
      {
        id: '123',
        body: 'zda asdasd',
        author: 'asdasd',
        createdAt: date,
      },
    ];

    service.getMessages().subscribe(res => {
      expect(res.data.length).toBe(1);
      expect(res.data).toEqual(outputMessages);
    });

    const req = httpMock.expectOne(`${service.baseUrl}/messages`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMessages);
  });

  // @TODO: add more tests
});
