import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import {
  DownloadOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Pagination } from "antd";

const HeartIcon = styled(HeartOutlined)`
  color: #777;
  font-size: 1.3rem;
  margin: 0 2rem;
  cursor: pointer;

  &:hover {
    color: ${themeGet("colors.primary")};
  }
`;

const MenuIcon = styled(MenuOutlined)`
  color: #777;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    color: ${themeGet("colors.primary")};
  }
`;

const DownloadIcon = styled(DownloadOutlined)`
  color: #777;
  font-size: 1.3rem;

  &:hover {
    color: ${themeGet("colors.primary")};
  }
`;

const Container = styled.div`
  height: 100%;
  margin: auto;
  background: transparent;
  max-width: 1920px;
`;

const PageWrapper = styled.div`
  width: 100%;
  background: ${themeGet("colors.primary")};
`;

const NewLabel = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${themeGet("colors.highlight")};
  font-size: ${themeGet("fontSizes.5")};
  color: ${themeGet("colors.white")};
  line-height: 2.3rem;
  width: 70px;
  text-align: center;
  margin: 0;
`;

const PaginationCustom = styled(Pagination)`
  .ant-pagination-item-active {
    border-color: ${themeGet("colors.primary")};

    a {
      color: ${themeGet("colors.primary")};
    }
  }

  .ant-pagination-item:hover,
  .ant-pagination-item-link:hover {
    border-color: ${themeGet("colors.primary")};

    a,
    svg {
      color: ${themeGet("colors.primary")};
    }
  }
`;

export {
  HeartIcon,
  MenuIcon,
  DownloadIcon,
  Container,
  PageWrapper,
  NewLabel,
  PaginationCustom,
};
