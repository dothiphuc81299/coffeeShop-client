import styled from 'styled-components';

export const SalaryWrapper = styled.div`
  background: #ffffffc7;
  padding-left: 300px;
  padding-right: 300px;
  ${'' /* width */}
  padding-top: 30px;
  height: 100%;
  p {
    font-weight: 600;
  }

  .header-btn {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #5ea4b65c;
    padding-bottom: 10px;
    p{
      font-size: 16px;
    }
  }

  .content-section {
    .row-content {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
      ${'' /* padding-bottom: 5px; */}

    }

    .border {
      border-bottom: 1px dashed #5ea4b65c;
    }
  }

  .ant-btn {
    border-radius: 50px;
    background: #5ea4b6;
  }
`