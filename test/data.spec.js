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
import {filterData, showData} from '../src/data';

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
    expect(typeof filterData).toBe('function');
  });
  it('should return string ', ()=>{
    expect(filterData([])).toBe("");
  })
  
})

