
import {filterDataDirector,filterDataScore, filterDataYear} from '../src/data';

describe('filterDataDirector', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataDirector).toBe('function');
  });


  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterDataDirector()).toThrow(TypeError);
    expect(() => filterDataDirector(0)).toThrow(TypeError);
    expect(() => filterDataDirector(null, [])).toThrow(TypeError);
    expect(() => filterDataDirector(0, 0)).toThrow(TypeError);
  });

  it('should return string ', ()=>{
    expect(filterDataDirector([])).toStrictEqual([]);
  })
  it('should return fares ', ()=>{
    expect(filterDataDirector([{director:"fares"}, {director:"fares"}, {director:"isabel"}],"fares")).toMatchObject([{director:"fares"}, {director:"fares"}]);
  })
})



describe('filterDataScore', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataScore).toBe('function');
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterDataScore()).toThrow(TypeError);
    expect(() => filterDataScore(0)).toThrow(TypeError);
    expect(() => filterDataScore(null, [])).toThrow(TypeError);
    expect(() => filterDataScore(0, 0)).toThrow(TypeError);
  });
  it('should return string ', () => {
    expect(filterDataScore([])).toStrictEqual([]);
  }); 
})
describe('filterDataYear', ()=>{
  it('is a function', ()=>{
    expect(typeof filterDataYear).toBe('function');
  });
 
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterDataYear()).toThrow(TypeError);
    expect(() => filterDataYear(0)).toThrow(TypeError);
    expect(() => filterDataYear(null, [])).toThrow(TypeError);
    expect(() => filterDataYear(0, 0)).toThrow(TypeError);
  });
  it('should return string ', () => {
    expect(filterDataYear([])).toStrictEqual([]);
  });
 
})

