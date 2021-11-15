/* import {  example,  anotherExample } from '../src/data.js';


 describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
}); 


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); 
 */

import {filterDataDirector,filterDataScore, filterDataYear, showData} from '../src/data';

describe('showData', ()=>{
  it('is a function', ()=>{
    expect(typeof showData).toBe('function');
  });
  it('should return string ', ()=>{
    expect(showData([])).toBe("");
  })
  
})

describe('filterData', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataDirector).toBe('function');
  });
  it('should return string ', ()=>{
    expect(filterDataDirector([])).toBe("");
  })
  
})

describe('filterData', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataScore).toBe('function');
  });
  it('should return string ', ()=>{
    expect(filterDataScore([])).toBe("");
  })
  
})

describe('filterData', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataYear).toBe('function');
  });
  it('should return string ', ()=>{
    expect(filterDataYear([])).toBe("");
  })
  
})

