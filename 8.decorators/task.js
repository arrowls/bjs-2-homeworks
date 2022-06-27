function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); 
      let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (objectInCache) { // если элемент не найден
          console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash, value: result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
  }


  function debounceDecoratorNew(func, interval) {
    let isImmediate = true;
    let timeout;
  
    return function(...args) {
      if (isImmediate) {
        func.apply(this, ...args);
        isImmediate = false;
      }
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, ...args);
        isImmediate = true;
      }, interval)
    }
  }
  
  function debounceDecorator2(func, interval) {
    let isImmediate = true;
    let timeout;
    wrapper.count = 0;
  
    function wrapper(...args) {
      wrapper.count++;
      if (isImmediate) {
        func.apply(this, ...args);
        isImmediate = false;
      }
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, ...args);
        isImmediate = true;
      }, interval)
    }
    return wrapper;
  }
