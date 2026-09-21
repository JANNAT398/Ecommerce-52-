import React, { useRef, useState } from "react";
import Container from "./layout/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick ";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrency,
  setLanguage,
  selectCurrency,
  selectLanguage,
  currencies,
  languages,
} from "../slices/appSettingsSlice";
import { useTranslation } from "../hooks/useTranslation";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRefTwo = useRef(null);

  const dispatch = useDispatch();
  const currentCurrency = useSelector(selectCurrency);
  const currentLanguage = useSelector(selectLanguage);
  const { t } = useTranslation();

  useOutsideClick(dropdownRef, () => setOpen(false), open);
  useOutsideClick(dropdownRefTwo, () => setOpenTwo(false), openTwo);

  const handleLanguageChange = (code) => {
    dispatch(setLanguage(code));
    setOpen(false);
  };

  const handleCurrencyChange = (code) => {
    dispatch(setCurrency(code));
    setOpenTwo(false);
  };

  return (
    <div className="border border-solid border-b-gry font-pop text-[#666666] text-sm py-[3.5px]">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
          <div className="hidden sm:flex items-center gap-x-1 truncate">
            <CiLocationOn className="shrink-0" />
            <span className="truncate">{t('storeLocation')}</span>
          </div>
          <div className="flex gap-x-4 sm:gap-x-5 items-center justify-between sm:justify-end w-full sm:w-auto">
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-primary select-none font-medium"
                onClick={() => { setOpen(!open); setOpenTwo(false); }}
              >
                {languages[currentLanguage]?.label || 'Eng'} <FaAngleDown className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`} />
              </div>
              {open && (
                <div className="absolute top-[25px] left-0 bg-white border border-gray-200 shadow-lg py-1.5 z-50 rounded min-w-[100px]">
                  <ul>
                    {Object.entries(languages).map(([code, lang]) => (
                      <li
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={`px-3 py-1.5 cursor-pointer flex items-center justify-between gap-2 transition-colors ${
                          currentLanguage === code ? 'bg-green-50 text-primary font-medium' : 'hover:bg-gray-50 hover:text-primary'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {currentLanguage === code && <FaCheck size={12} />}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="relative" ref={dropdownRefTwo}>
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-primary select-none font-medium"
                onClick={() => { setOpenTwo(!openTwo); setOpen(false); }}
              >
                <span className="text-primary font-semibold mr-0.5">
                  {currencies[currentCurrency]?.symbol || '$'}
                </span>
                {currencies[currentCurrency]?.code || 'USD'}
                <FaAngleDown className={`text-xs transition-transform ${openTwo ? 'rotate-180' : ''}`} />
              </div>
              {openTwo && (
                <div className="absolute top-[25px] left-0 bg-white border border-gray-200 shadow-lg py-1.5 z-50 rounded min-w-[110px]">
                  <ul>
                    {Object.entries(currencies).map(([code, info]) => (
                      <li
                        key={code}
                        onClick={() => handleCurrencyChange(code)}
                        className={`px-3 py-1.5 cursor-pointer flex items-center justify-between gap-2 transition-colors ${
                          currentCurrency === code ? 'bg-green-50 text-primary font-medium' : 'hover:bg-gray-50 hover:text-primary'
                        }`}
                      >
                        <span>
                          <span className="text-primary font-bold mr-1">{info.symbol}</span>
                          {info.code}
                        </span>
                        {currentCurrency === code && <FaCheck size={12} />}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 border-l border-gray-300 pl-3">
              <Link to="/registration" className="hover:text-primary">{t('signUp')}</Link>
              <span>/</span>
              <Link to="/login" className="hover:text-primary">{t('signIn')}</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
