import styled from 'styled-components';
import { Modal } from 'antd';

export const CalendarWrapper = styled.div`
  background: #ffffffc7;
  padding-left: 250px;
  padding-right: 250px;
  ${'' /* width */}
  padding-top: 30px;
  height: 100%;

  .ant-picker {
    border-radius: 8px;
    width: 150px;
  }
  .ant-picker-input {
    input {
      text-align: center;
      color: #3d5352;
      font-weight: 600;
    }
  }

  p {
    text-align: right;
    margin: 20px 0px;
    font-weight: 700;
    color: #3d5352;
  }

  .header-section {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;

    h3 {
      font-weight: 700;
      color: #3d5352;
      text-align: center;
    }
  }

  .ant-btn {
    border: none;
    color: #fff;
    font-weight: 600;
    background: #8dc1d0;
    border-radius: 8px;
    width: 150px;
  }

  .ant-table-thead > tr > th {
    padding: 10px;
    ${'' /* width: 100px; */}
    background: #8dc1d0;
    color: white;
    font-weight: 600;
  }

  .ant-table-tbody {
    .ant-table-row {
      .ant-table-cell {
        font-weight: 700;
        color: #3d5352;
        text-align: center;
      }
    }
  }
  .table-section
    .ant-table-container
    .ant-table-content
    table
    .ant-table-thead
    tr
    th:first-child {
    border-top-left-radius: 8px !important;
    ${'' /* border-bottom-left-radius: 8px !important; */}
  }

  .table-section
    .ant-table-container
    .ant-table-content
    table
    .ant-table-thead
    tr
    th:last-child {
    border-top-right-radius: 8px;
    ${'' /* border-bottom-right-radius: 8px; */}
  }
  .table-section
    .ant-table-container
    .ant-table-content
    table
    .ant-table-tbody
    tr:last-child
    td:last-child {
    ${'' /* border-top-right-radius: 8px; */}
    border-bottom-right-radius: 8px;
  }

  .table-section
    .ant-table-container
    .ant-table-content
    table
    .ant-table-tbody
    tr:last-child
    td:first-child {
    ${'' /* border-top-right-radius: 8px; */}
    border-bottom-left-radius: 8px;
  }
`;

export const ModalWrapper = styled(Modal)`
  .ant-form-item-label
    > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none;
  }

  .ant-modal-header {
    .ant-modal-title {
      font-weight: 600;
      color: #3d5352;
    }
  }
  .ant-btn {
    background: #8dc1d0;
    border: none;
    border-radius: 8px;
    height: auto;
    padding: 8px 15px;
    font-weight: 600;
    width: 100%;
  }

  .history-section {
    h3 {
      font-weight: 600;
      color: #3d5352;
    }
    .ant-btn {
      background: #fff;
      border: none;
      .anticon {
        font-size: 15px;
      }
    }

    .ant-list-bordered {
      border: none;
    }
  }

  .ant-select-selector {
    border-radius: 8px !important;
  }

  .input-section {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
    .ant-row {
      width: 45%;
      .ant-picker {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
`;
