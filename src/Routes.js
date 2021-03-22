import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Loader from './component/Loader/Loader';
import NavMotion from './layout/NavMotion';
import MainLayout from './layout/MainLayout';
import MinimalLayout from './layout/MinimalLayout';

const AuthLogin = lazy(() => import('./views/Login'));

const Price = lazy(() => import('./views/Application/Price/Price2'));

const DashboardDefault = lazy(() => import('./views/Dashboard/Default'));

const RtlLayout = lazy(() => import('./views/RtlLayout'));

const TableBasic = lazy(() => import('./views/Tables/TableBasic'));

const UtilsIcons = lazy(() => import('./views/Utils/Icons'));
const UtilsTypography = lazy(() => import('./views/Utils/Typography'));

const MultiLanguage = lazy(() => import('./views/MultiLanguage'));

const Routes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to="/dashboard/default" />
                    <Route path={[]}>
                        <MinimalLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion></NavMotion>
                            </Switch>
                        </MinimalLayout>
                    </Route>
                    <Route
                        path={[
                            '/register',
                            '/application/register',
                            '/forgot-password',
                            '/application/forgot-password',
                            '/application/login',
                            '/pages/error/error1',
                            '/pages/error/error2',
                            '/pages/comingsoon',

                            '/dashboard/default',
                            '/widget/statistic',
                            '/widget/data',
                            '/widget/chart',
                            '/rtl',
                            '/user/account',
                            '/user/card',
                            '/user/list',
                            '/user/profile',
                            '/user/socialprofile',
                            '/application/ecommerce/account',
                            '/application/ecommerce/addproduct',
                            '/application/ecommerce/product',
                            '/application/ecommerce/customerlist',
                            '/application/ecommerce/orderlist',
                            '/application/ecommerce/orderdetails',
                            '/application/ecommerce/productreview',
                            '/application/contacts/list',
                            '/application/contacts/card',
                            '/application/price/price1',
                            '/application/price/price2',
                            '/application/price/price3',
                            '/application/mail',
                            '/application/chat',
                            '/basic/accordion',
                            '/basic/avatar',
                            '/basic/badges',
                            '/basic/breadcrumb',
                            '/basic/cards',
                            '/basic/chip',
                            '/basic/list',
                            '/basic/tabs',
                            '/advance/alert',
                            '/advance/dialog',
                            '/advance/pagination',
                            '/advance/progress',
                            '/advance/rating',
                            '/advance/snackbar',
                            '/advance/speeddial',
                            '/advance/timeline',
                            '/advance/toggle-button',
                            '/advance/treeview',
                            '/forms/frm-autocomplete',
                            '/forms/frm-button',
                            '/forms/frm-checkbox',
                            '/forms/frm-datetime',
                            '/forms/frm-listbox',
                            '/forms/frm-radio',
                            '/forms/frm-select',
                            '/forms/frm-slider',
                            '/forms/frm-switch',
                            '/forms/frm-text-field',
                            '/tables/table-basic',
                            '/tables/dense-table',
                            '/tables/enhanced-table',
                            '/tables/data-table',
                            '/tables/customized-table',
                            '/tables/sticky-header-table',
                            '/tables/collapse-table',
                            '/mui-datatables/mui-simple',
                            '/mui-datatables/mui-column-filters',
                            '/mui-datatables/mui-column-options-update',
                            '/mui-datatables/mui-column-sort',
                            '/mui-datatables/mui-component-edit',
                            '/mui-datatables/mui-csv-export',
                            '/mui-datatables/mui-custom-action-button',
                            '/mui-datatables/mui-custom-components',
                            '/mui-datatables/mui-customize-columns',
                            '/mui-datatables/mui-customize-filter',
                            '/mui-datatables/mui-draggable-columns',
                            '/mui-datatables/mui-expandable-rows',
                            '/mui-datatables/mui-fixed-header',
                            '/mui-datatables/mui-resizable-columns',
                            '/mui-datatables/mui-selectable-rows',
                            '/utils/util-modal',
                            '/utils/util-tooltip',
                            '/utils/util-popover',
                            '/utils/util-popper',
                            '/utils/util-transitions',
                            '/utils/util-icons',
                            '/utils/util-typography',
                            '/sample-page',
                            '/multi-language',
                        ]}
                    >
                        <MainLayout>
                            <Switch location={location} key={location.pathname}>
                                <NavMotion>
                                    <Route path="/application/login" component={AuthLogin} />
                                    <Route path="/application/register" component={Price} />
                                    <Route path="/register" component={Price} />
                                    <Route path="/application/forgot-password" component={Price} />
                                    <Route path="/forgot-password" component={Price} />
                                    <Route path="/pages/error/error1" component={Price} />
                                    <Route path="/pages/error/error2" component={Price} />
                                    <Route path="/pages/comingsoon" component={Price} />

                                    <Route path="/dashboard/default" component={DashboardDefault} />
                                    <Route path="/utils/util-typography" component={UtilsTypography} />
                                    <Route path="/multi-language" component={MultiLanguage} />
                                    <Route path="/rtl" component={RtlLayout} />
                                    <Route path="/utils/util-icons" component={UtilsIcons} />
                                    <Route path="/tables/table-basic" component={TableBasic} />

                                    <Route path="/widget/statistic" component={Price} />
                                    <Route path="/widget/data" component={Price} />
                                    <Route path="/widget/chart" component={Price} />
                                    <Route path="/user/account" component={Price} />
                                    <Route path="/user/card" component={Price} />
                                    <Route path="/user/list" component={Price} />
                                    <Route path="/user/profile" component={Price} />
                                    <Route path="/user/socialprofile" component={Price} />
                                    <Route path="/application/ecommerce/account" component={Price} />
                                    <Route path="/application/ecommerce/product" component={Price} />
                                    <Route path="/application/ecommerce/customerlist" component={Price} />
                                    <Route path="/application/ecommerce/orderlist" component={Price} />
                                    <Route path="/application/ecommerce/orderdetails" component={Price} />
                                    <Route path="/application/ecommerce/addproduct" component={Price} />
                                    <Route path="/application/ecommerce/productreview" component={Price} />
                                    <Route path="/application/contacts/list" component={Price} />
                                    <Route path="/application/contacts/card" component={Price} />
                                    <Route path="/application/mail" component={Price} />
                                    <Route path="/application/chat" component={Price} />
                                    <Route path="/application/price/price1" component={Price} />
                                    <Route path="/application/price/price2" component={Price} />
                                    <Route path="/application/price/price3" component={Price} />
                                    <Route path="/basic/accordion" component={Price} />
                                    <Route path="/basic/avatar" component={Price} />
                                    <Route path="/basic/badges" component={Price} />
                                    <Route path="/basic/breadcrumb" component={Price} />
                                    <Route path="/basic/cards" component={Price} />
                                    <Route path="/basic/chip" component={Price} />
                                    <Route path="/basic/list" component={Price} />
                                    <Route path="/basic/tabs" component={Price} />
                                    <Route path="/advance/alert" component={Price} />
                                    <Route path="/advance/dialog" component={Price} />
                                    <Route path="/advance/pagination" component={Price} />
                                    <Route path="/advance/progress" component={Price} />
                                    <Route path="/advance/rating" component={Price} />
                                    <Route path="/advance/snackbar" component={Price} />
                                    <Route path="/advance/speeddial" component={Price} />
                                    <Route path="/advance/timeline" component={Price} />
                                    <Route path="/advance/toggle-button" component={Price} />
                                    <Route path="/advance/treeview" component={Price} />
                                    <Route path="/forms/frm-autocomplete" component={Price} />
                                    <Route path="/forms/frm-button" component={Price} />
                                    <Route path="/forms/frm-checkbox" component={Price} />
                                    <Route path="/forms/frm-datetime" component={Price} />
                                    <Route path="/forms/frm-listbox" component={Price} />
                                    <Route path="/forms/frm-radio" component={Price} />
                                    <Route path="/forms/frm-select" component={Price} />
                                    <Route path="/forms/frm-slider" component={Price} />
                                    <Route path="/forms/frm-switch" component={Price} />
                                    <Route path="/forms/frm-text-field" component={Price} />

                                    <Route path="/tables/dense-table" component={Price} />
                                    <Route path="/tables/enhanced-table" component={Price} />
                                    <Route path="/tables/data-table" component={Price} />
                                    <Route path="/tables/customized-table" component={Price} />
                                    <Route path="/tables/sticky-header-table" component={Price} />
                                    <Route path="/tables/collapse-table" component={Price} />
                                    <Route path="/mui-datatables/mui-simple" component={Price} />
                                    <Route path="/mui-datatables/mui-column-filters" component={Price} />
                                    <Route path="/mui-datatables/mui-column-options-update" component={Price} />
                                    <Route path="/mui-datatables/mui-component-edit" component={Price} />
                                    <Route path="/mui-datatables/mui-column-sort" component={Price} />
                                    <Route path="/mui-datatables/mui-csv-export" component={Price} />
                                    <Route path="/mui-datatables/mui-custom-action-button" component={Price} />
                                    <Route path="/mui-datatables/mui-custom-components" component={Price} />
                                    <Route path="/mui-datatables/mui-customize-columns" component={Price} />
                                    <Route path="/mui-datatables/mui-customize-filter" component={Price} />
                                    <Route path="/mui-datatables/mui-draggable-columns" component={Price} />
                                    <Route path="/mui-datatables/mui-expandable-rows" component={Price} />
                                    <Route path="/mui-datatables/mui-fixed-header" component={Price} />
                                    <Route path="/mui-datatables/mui-resizable-columns" component={Price} />
                                    <Route path="/mui-datatables/mui-selectable-rows" component={Price} />
                                    <Route path="/utils/util-modal" component={Price} />
                                    <Route path="/utils/util-tooltip" component={Price} />
                                    <Route path="/utils/util-popover" component={Price} />
                                    <Route path="/utils/util-popper" component={Price} />
                                    <Route path="/utils/util-transitions" component={Price} />

                                    <Route path="/sample-page" component={Price} />
                                </NavMotion>
                            </Switch>
                        </MainLayout>
                    </Route>
                </Switch>
            </Suspense>
        </AnimatePresence>
    );
};

export default Routes;
