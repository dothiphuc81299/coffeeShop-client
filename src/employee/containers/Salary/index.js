import React, { useEffect, useState } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { SalaryWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSalary, getSalaryByMonth } from '../../../redux/action/salary';

const Salary = () => {
  const dispatch = useDispatch();
  let newDate = new Date();
  let month = newDate.getMonth() + 1;
  const [currentMonth, setCurrentMonth] = useState(month - 1);
  const currentSalary = useSelector((state) => state.salary.currentSalary);
const token =localStorage.getItem("tokenAdmin");

  const handleClickLastMonth = () => {
    if (currentMonth !== 1) {
      setCurrentMonth((currentMonth) => currentMonth - 1);
      dispatch(getSalaryByMonth({
        month: currentMonth - 1,
        token,
      }));
    }
  };

  const handleClickNextMonth = () => {
    if (currentMonth !== 12 && currentMonth !== month - 1) {
      setCurrentMonth((currentMonth) => currentMonth + 1);
      dispatch(getSalaryByMonth({
        month: currentMonth + 1,
        token,
      }));
    }
  };

  useEffect(() => {
    dispatch(getSalaryByMonth({
      month: currentMonth,
      token,
    }));
  }, []);

  return (
    <SalaryWrapper>
      <div className="header-btn">
        <Button
          type="primary"
          icon={<CaretLeftOutlined />}
          onClick={handleClickLastMonth}
        />
        <p>Tháng {currentMonth}</p>
        <Button
          type="primary"
          icon={<CaretRightOutlined />}
          onClick={handleClickNextMonth}
        />
      </div>
      <div className="content-section">
        <div className="row-content">
          <h3>Tổng số ca đã làm</h3>
          <p>{currentSalary.totalShift}</p>
        </div>
        <div className="row-content">
          <h3>Hệ số lương</h3>
          <p>{currentSalary.coefficient}</p>
        </div>
        <div className="row-content">
          <h3>Tổng lương</h3>
          <p>{currentSalary.totalSalary}</p>
        </div>
        <div className="row-content border">
          <h3>Trợ cấp</h3>
          <p>{currentSalary.allowance}</p>
        </div>
        <div className="row-content">
          <h3>Tổng cộng</h3>
          <p>{currentSalary.totalSalary + currentSalary.allowance}</p>
        </div>
      </div>
    </SalaryWrapper>
  );
};

export default Salary;
