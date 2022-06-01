import { useState, useEffect } from 'react';
import { axiosUserObject } from '../../apis/apis';
import UserCard from '../Card/UserCard';
import { Row, Col } from 'antd';
import styles from './CardList.module.css';
import Loader from '../Loader/Loader';

const CardList = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosUserObject.get(process.env.REACT_APP_API_URL);
      setUserList(response.data);
    };

    fetchData();

    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  const handleDelete = (id) => {
    setUserList((prev) =>
      prev.filter((user) => {
        return user.id !== id;
      })
    );
  };

  useEffect(() => {
    if (userList.length === 0) {
      setIsLoading(true);
    }
  }, [userList]);

  let perChunk = 4;

  let result = userList.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return !isLoading ? (
    <>
      {result.map((list) => {
        return (
          <Row
            className={styles.cardRow}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            {list.map((user) => {
              return (
                <Col
                  xs={{
                    span: 24,
                  }}
                  sm={{
                    span: 24,
                  }}
                  md={{
                    span: 6,
                  }}
                  lg={{
                    span: 6,
                  }}
                  xl={{
                    span: 6,
                  }}
                >
                  <UserCard user={user} handleDelete={handleDelete} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </>
  ) : (
    <Loader />
  );
};

export default CardList;
