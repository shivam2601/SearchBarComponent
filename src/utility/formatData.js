
export function formatData(cityData) {
    let reqData = [];
    cityData.r.map((data) => {
      let obj = {};
      obj["city"] = data?.xtr?.cn;
      obj["country"] = data?.xtr?.cnt_n;
      obj["airport"] = data?.n;
      reqData.push(obj);
    });
    return reqData;
  }
  