import { Button } from "antd";
import axios from "axios";
import React, { useState } from "react";

//모델구조 :
// 키 : articles, 값 : [{기사객체},{기사객체},{기사객체},{기사객체}...]
// 가지고 올 데이터 :
//1) title 2) description 3) url 4) urlToImage

const ApiTestKoreaNews = () => {
  //REST API 서버에서, 임시로 받아온 data, state로 확인하기.
  const [data, setData] = useState(null);

  // 방법2 , async, await 버전으로 변경.
  // 비동기 함수로 구현할 함수앞에 키워드 : async 붙이기.
  const onClick = async () => {
    try {
      // await 는 Promise 를 반환하는 함수 앞에 사용
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=6af3420673e44e20bca25e3273809da9"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={onClick}>
        가져오기
      </Button>
      <div>
        {data && (
          <textarea
            rows={8}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default ApiTestKoreaNews;
