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

import {filterDataDirector,filterDataScore, filterDataYear} from '../src/data';

describe('filterData', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataDirector).toBe('function');
  });
  it('should return string ', ()=>{
    expect(filterDataDirector([])).toStrictEqual([]);
  })
  
})

describe('filterData', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataScore).toBe('function');
  });
  it('should return string ', ()=>{
    expect(filterDataScore([])).toStrictEqual([]);
  })
  
})

describe('filterData', ()=>{
  it('should be a function', ()=>{
    expect(typeof filterDataYear).toBe('function');
  });

  it('should return string ', ()=>{
    expect(filterDataYear([])).toStrictEqual([]);
  })
  
})

