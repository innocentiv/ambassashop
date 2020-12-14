import { FC } from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../app/routes";
import {
  SelectCurrency,
  SelectCurrencyProps,
} from "../selectCurrency/selectCurrency";

const HeaderContainer = tw.header`bg-white shadow-sm sticky top-0`;

const WidthContainer = tw.div`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4`;

const NavContainer = tw.div`flex items-center justify-between`;

const MainTitleLink = tw(Link)`font-bold text-gray-700 text-2xl`;

export interface HeaderProps extends SelectCurrencyProps {}

export const Header: FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer>
      <WidthContainer>
        <NavContainer>
          <MainTitleLink to={AppRoutes.intro()}>
            <h1>Ambassashop</h1>
          </MainTitleLink>
          <SelectCurrency {...props} />
        </NavContainer>
      </WidthContainer>
    </HeaderContainer>
  );
};
