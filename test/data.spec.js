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

  it('should return item director ', ()=>{
    expect(filterDataDirector([{director:"uzumaki"}, {director:"uzumaki"}, {director:"isabel"}],"uzumaki")).toMatchObject([{director:"uzumaki"}, {director:"uzumaki"}]);
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
  it('should return array ', () => {
    expect(filterDataScore([])).toStrictEqual([]);
  });
  it('should return item rt_score ', ()=>{
    expect(filterDataScore([{rt_score:"10"}, {rt_score:"10"}, {rt_score:"isabel"}],"20", "10")).toMatchObject([{rt_score:"10"}, {rt_score:"10"}]); 
  }) 
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
  it('should return item year ', ()=>{
     expect(filterDataYear([{release_date:"1852"}, {release_date:"1852"}, {release_date:"2000"}],"1852")).toMatchObject([{release_date:"1852"}, {release_date:"1852"}]); 
  })
})

