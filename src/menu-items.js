import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FormatUnderlinedOutlinedIcon from '@material-ui/icons/FormatUnderlinedOutlined';
import GamesOutlinedIcon from '@material-ui/icons/GamesOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import CallToActionOutlinedIcon from '@material-ui/icons/CallToActionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import FilterVintageOutlinedIcon from '@material-ui/icons/FilterVintageOutlined';
import FormatColorTextOutlinedIcon from '@material-ui/icons/FormatColorTextOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import TranslateIcon from '@material-ui/icons/Translate';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';

const icons = {
    NavigationOutlinedIcon: NavigationOutlinedIcon,
    HomeOutlinedIcon: HomeOutlinedIcon,
    FormatUnderlinedOutlinedIcon: FormatUnderlinedOutlinedIcon,
    GamesOutlinedIcon: GamesOutlinedIcon,
    LoyaltyOutlinedIcon: LoyaltyOutlinedIcon,
    ForumOutlinedIcon: ForumOutlinedIcon,
    DescriptionOutlinedIcon: DescriptionOutlinedIcon,
    GridOnOutlinedIcon: GridOnOutlinedIcon,
    TableChartOutlinedIcon: TableChartOutlinedIcon,
    AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
    CallToActionOutlinedIcon: CallToActionOutlinedIcon,
    NotificationsNoneOutlinedIcon: NotificationsNoneOutlinedIcon,
    AppsOutlinedIcon: AppsOutlinedIcon,
    SmsOutlinedIcon: SmsOutlinedIcon,
    FilterVintageOutlinedIcon: FilterVintageOutlinedIcon,
    FormatColorTextOutlinedIcon: FormatColorTextOutlinedIcon,
    ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
    LayersOutlinedIcon: LayersOutlinedIcon,
    BlockOutlinedIcon: BlockOutlinedIcon,
    ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
    FiberManualRecordOutlinedIcon: FiberManualRecordOutlinedIcon,
    EditAttributesOutlinedIcon: EditAttributesOutlinedIcon,
    FaceOutlinedIcon: FaceOutlinedIcon,
    RadioButtonUncheckedOutlinedIcon: RadioButtonUncheckedOutlinedIcon,
    QuestionAnswerOutlinedIcon: QuestionAnswerOutlinedIcon,
    AccountCircleOutlinedIcon: AccountCircleOutlinedIcon,
    ShoppingCartOutlinedIcon: ShoppingCartOutlinedIcon,
    MailOutlineRoundedIcon: MailOutlineRoundedIcon,
    SpeakerNotesOutlinedIcon: SpeakerNotesOutlinedIcon,
    CardGiftcardOutlinedIcon: CardGiftcardOutlinedIcon,
    ErrorOutlineRoundedIcon: ErrorOutlineRoundedIcon,
    HourglassEmptyRoundedIcon: HourglassEmptyRoundedIcon,
    MonetizationOnOutlinedIcon: MonetizationOnOutlinedIcon,
    AssignmentIndOutlinedIcon: AssignmentIndOutlinedIcon,
    SecurityOutlinedIcon: SecurityOutlinedIcon,
    HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
    TranslateIcon: TranslateIcon,
    FormatListNumberedRtlIcon: FormatListNumberedRtlIcon,
};

export default {
    items: [
        {
            id: 'navigation',
            title: 'Materially',
            caption: 'Dashboard & Widgets',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    icon: icons['HomeOutlinedIcon'],
                    url: '/dashboard/default',
                },
                {
                    id: 'widget',
                    title: 'Widget',
                    type: 'collapse',
                    icon: icons['CardGiftcardOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'statistic',
                            title: 'Statistic',
                            type: 'item',
                            url: '/widget/statistic',
                        },
                        {
                            id: 'data',
                            title: 'Data',
                            type: 'item',
                            url: '/widget/data',
                        },
                        {
                            id: 'chart',
                            title: 'Chart',
                            type: 'item',
                            url: '/widget/chart',
                        },
                    ],
                },
                {
                    id: 'rtl',
                    title: 'RTL Layout',
                    type: 'item',
                    icon: icons['FormatListNumberedRtlIcon'],
                    url: '/rtl',
                    target: true,
                },
            ],
        },
        {
            id: 'application',
            title: 'Application',
            caption: 'Prebuild Application',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'user',
                    title: 'User',
                    type: 'collapse',
                    icon: icons['AccountCircleOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'account',
                            title: 'Account',
                            type: 'item',
                            url: '/user/account',
                        },
                        {
                            id: 'profile',
                            title: 'Profile',
                            type: 'item',
                            url: '/user/profile',
                        },
                        {
                            id: 'socialprofile',
                            title: 'Socialprofile',
                            type: 'item',
                            url: '/user/socialprofile',
                        },
                        {
                            id: 'card',
                            title: 'Card',
                            type: 'item',
                            url: '/user/card',
                        },
                        {
                            id: 'list',
                            title: 'List',
                            type: 'item',
                            url: '/user/list',
                        },
                    ],
                },
                {
                    id: 'ecommerce',
                    title: 'E-commerce',
                    type: 'collapse',
                    icon: icons['ShoppingCartOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        size: 'small',
                        error: true,
                    },
                    children: [
                        {
                            id: 'account',
                            title: 'Account',
                            type: 'item',
                            url: '/application/ecommerce/account',
                        },
                        {
                            id: 'addproduct',
                            title: 'Add Product',
                            type: 'item',
                            url: '/application/ecommerce/addproduct',
                        },
                        {
                            id: 'Customerslist',
                            title: 'Customers List',
                            type: 'item',
                            url: '/application/ecommerce/customerlist',
                        },
                        {
                            id: 'orderlist',
                            title: 'Order List',
                            type: 'item',
                            url: '/application/ecommerce/orderlist',
                        },
                        {
                            id: 'orderdetails',
                            title: 'Order Details',
                            type: 'item',
                            url: '/application/ecommerce/orderdetails',
                        },
                        {
                            id: 'product',
                            title: 'Product',
                            type: 'item',
                            url: '/application/ecommerce/product',
                        },
                        {
                            id: 'productreview',
                            title: 'Product Reviews',
                            type: 'item',
                            url: '/application/ecommerce/productreview',
                        },
                    ],
                },
                {
                    id: 'contacts',
                    title: 'Contacts',
                    type: 'collapse',
                    icon: icons['AssignmentIndOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'contactlist',
                            title: 'List',
                            type: 'item',
                            url: '/application/contacts/list',
                        },
                        {
                            id: 'contactcard',
                            title: 'Card',
                            type: 'item',
                            url: '/application/contacts/card',
                        },
                    ],
                },
                {
                    id: 'mail',
                    title: 'Mail',
                    type: 'item',
                    url: '/application/mail',
                    icon: icons['MailOutlineRoundedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'chat',
                    title: 'Chat',
                    type: 'item',
                    url: '/application/chat',
                    icon: icons['SpeakerNotesOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
            ],
        },
        {
            id: 'ui-element',
            title: 'UI Element',
            caption: 'Material UI Components',
            type: 'group',
            icon: icons['FormatUnderlinedOutlinedIcon'],
            children: [
                {
                    id: 'basic',
                    title: 'Basic',
                    type: 'collapse',
                    icon: icons['GamesOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'accordion',
                            title: 'Accordion',
                            type: 'item',
                            url: '/basic/accordion',
                        },
                        {
                            id: 'avatar',
                            title: 'Avatar',
                            type: 'item',
                            url: '/basic/avatar',
                        },
                        {
                            id: 'badges',
                            title: 'Badges',
                            type: 'item',
                            url: '/basic/badges',
                        },
                        {
                            id: 'breadcrumb',
                            title: 'Breadcrumb',
                            type: 'item',
                            url: '/basic/breadcrumb',
                        },
                        {
                            id: 'cards',
                            title: 'Cards',
                            type: 'item',
                            url: '/basic/cards',
                        },
                        {
                            id: 'chip',
                            title: 'Chip',
                            type: 'item',
                            url: '/basic/chip',
                        },
                        {
                            id: 'list',
                            title: 'List',
                            type: 'item',
                            url: '/basic/list',
                        },
                        {
                            id: 'tabs',
                            title: 'Tabs',
                            type: 'item',
                            url: '/basic/tabs',
                        },
                    ],
                },
                {
                    id: 'advance',
                    title: 'Advance',
                    type: 'collapse',
                    icon: icons['LoyaltyOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'alert',
                            title: 'Alert',
                            type: 'item',
                            url: '/advance/alert',
                        },
                        {
                            id: 'dialog',
                            title: 'Dialog',
                            type: 'item',
                            url: '/advance/dialog',
                        },
                        {
                            id: 'pagination',
                            title: 'Pagination',
                            type: 'item',
                            url: '/advance/pagination',
                        },
                        {
                            id: 'progress',
                            title: 'Progress',
                            type: 'item',
                            url: '/advance/progress',
                        },
                        {
                            id: 'rating',
                            title: 'Rating',
                            type: 'item',
                            url: '/advance/rating',
                        },
                        {
                            id: 'snackbar',
                            title: 'Snackbar',
                            type: 'item',
                            url: '/advance/snackbar',
                        },
                        {
                            id: 'speeddial',
                            title: 'Speeddial',
                            type: 'item',
                            url: '/advance/speeddial',
                        },
                        {
                            id: 'timeline',
                            title: 'Timeline',
                            type: 'item',
                            url: '/advance/timeline',
                        },
                        {
                            id: 'toggle-button',
                            title: 'Toggle Button',
                            type: 'item',
                            url: '/advance/toggle-button',
                        },
                        {
                            id: 'treeview',
                            title: 'Treeview',
                            type: 'item',
                            url: '/advance/treeview',
                        },
                    ],
                },
            ],
        },
        {
            id: 'ui-forms',
            title: 'Forms & Tables',
            type: 'group',
            icon: icons['ForumOutlinedIcon'],
            children: [
                {
                    id: 'forms',
                    title: 'Forms',
                    type: 'collapse',
                    icon: icons['DescriptionOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'frm-autocomplete',
                            title: 'Autocomplete',
                            type: 'item',
                            url: '/forms/frm-autocomplete',
                        },
                        {
                            id: 'frm-button',
                            title: 'Button',
                            type: 'item',
                            url: '/forms/frm-button',
                        },
                        {
                            id: 'frm-checkbox',
                            title: 'Checkbox',
                            type: 'item',
                            url: '/forms/frm-checkbox',
                        },
                        {
                            id: 'frm-datetime',
                            title: 'Date & Time',
                            type: 'item',
                            url: '/forms/frm-datetime',
                        },
                        {
                            id: 'frm-listbox',
                            title: 'Listbox',
                            type: 'item',
                            url: '/forms/frm-listbox',
                        },
                        {
                            id: 'frm-radio',
                            title: 'Radio',
                            type: 'item',
                            url: '/forms/frm-radio',
                        },
                        {
                            id: 'frm-select',
                            title: 'Select',
                            type: 'item',
                            url: '/forms/frm-select',
                        },
                        {
                            id: 'frm-slider',
                            title: 'Slider',
                            type: 'item',
                            url: '/forms/frm-slider',
                        },
                        {
                            id: 'frm-switch',
                            title: 'Switch',
                            type: 'item',
                            url: '/forms/frm-switch',
                        },
                        {
                            id: 'frm-text-field',
                            title: 'Text Field',
                            type: 'item',
                            url: '/forms/frm-text-field',
                        },
                    ],
                },
                {
                    id: 'tables',
                    title: 'Table',
                    type: 'collapse',
                    icon: icons['TableChartOutlinedIcon'],
                    children: [
                        {
                            id: 'table-basic',
                            title: 'Basic Table',
                            type: 'item',
                            url: '/tables/table-basic',
                        },
                        {
                            id: 'dense-table',
                            title: 'Dense Tables',
                            type: 'item',
                            url: '/tables/dense-table',
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                        {
                            id: 'enhanced-table',
                            title: 'Enhanced Tables',
                            type: 'item',
                            url: '/tables/enhanced-table',
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                        {
                            id: 'data-table',
                            title: 'Data Table',
                            type: 'item',
                            url: '/tables/data-table',
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                        {
                            id: 'customized-table',
                            title: 'Custom Table',
                            type: 'item',
                            url: '/tables/customized-table',
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                        {
                            id: 'sticky-header-table',
                            title: 'Fixed Header',
                            type: 'item',
                            url: '/tables/sticky-header-table',
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                        {
                            id: 'collapse-table',
                            title: 'Collapse Table',
                            type: 'item',
                            url: '/tables/collapse-table',
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                    ],
                },
                {
                    id: 'mui-datatables',
                    title: 'MUI Datatable',
                    type: 'collapse',
                    icon: icons['GridOnOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'mui-simple',
                            title: 'Simple',
                            type: 'item',
                            url: '/mui-datatables/mui-simple',
                        },
                        {
                            id: 'mui-column-filters',
                            title: 'Column Filters',
                            type: 'item',
                            url: '/mui-datatables/mui-column-filters',
                        },
                        {
                            id: 'mui-column-options-update',
                            title: 'Column Options Update',
                            type: 'item',
                            url: '/mui-datatables/mui-column-options-update',
                        },
                        {
                            id: 'mui-column-sort',
                            title: 'Column Sort',
                            type: 'item',
                            url: '/mui-datatables/mui-column-sort',
                        },
                        {
                            id: 'mui-component-edit',
                            title: 'Editable',
                            type: 'item',
                            url: '/mui-datatables/mui-component-edit',
                        },
                        {
                            id: 'mui-csv-export',
                            title: 'CSV Export',
                            type: 'item',
                            url: '/mui-datatables/mui-csv-export',
                        },
                        {
                            id: 'mui-custom-action-button',
                            title: 'Custom Action Button',
                            type: 'item',
                            url: '/mui-datatables/mui-custom-action-button',
                        },
                        {
                            id: 'mui-custom-components',
                            title: 'Custom Components',
                            type: 'item',
                            url: '/mui-datatables/mui-custom-components',
                        },
                        {
                            id: 'mui-customize-columns',
                            title: 'Customize Columns',
                            type: 'item',
                            url: '/mui-datatables/mui-customize-columns',
                        },
                        {
                            id: 'mui-customize-filter',
                            title: 'Customize Filter',
                            type: 'item',
                            url: '/mui-datatables/mui-customize-filter',
                        },
                        {
                            id: 'mui-draggable-columns',
                            title: 'Draggable Columns',
                            type: 'item',
                            url: '/mui-datatables/mui-draggable-columns',
                        },
                        {
                            id: 'mui-expandable-rows',
                            title: 'Expandable Rows',
                            type: 'item',
                            url: '/mui-datatables/mui-expandable-rows',
                        },
                        {
                            id: 'mui-fixed-header',
                            title: 'Fixed Header',
                            type: 'item',
                            url: '/mui-datatables/mui-fixed-header',
                        },
                        {
                            id: 'mui-resizable-columns',
                            title: 'Resizable Columns',
                            type: 'item',
                            url: '/mui-datatables/mui-resizable-columns',
                        },
                        {
                            id: 'mui-selectable-rows',
                            title: 'Selectable Rows',
                            type: 'item',
                            url: '/mui-datatables/mui-selectable-rows',
                        },
                    ],
                },
            ],
        },
        {
            id: 'pages',
            title: 'Pages',
            caption: 'Prebuild Pages',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'sample-page',
                    title: 'Sample Page',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons['ChromeReaderModeOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'multi-language',
                    title: 'Multi-Language',
                    type: 'item',
                    url: '/multi-language',
                    icon: icons['TranslateIcon'],
                },
                {
                    id: 'auth',
                    title: 'Authentication',
                    type: 'collapse',
                    icon: icons['SecurityOutlinedIcon'],
                    children: [
                        {
                            id: 'login-1',
                            title: 'Login',
                            type: 'item',
                            url: '/application/login',
                            target: true,
                        },
                        {
                            id: 'register',
                            title: 'Register',
                            type: 'item',
                            url: '/application/register',
                            target: true,
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                        {
                            id: 'forget-1',
                            title: 'Forget Password',
                            type: 'item',
                            url: '/application/forgot-password',
                            target: true,
                            chip: {
                                label: 'Pro',
                                error: true,
                                size: 'small',
                            },
                        },
                    ],
                },
                {
                    id: 'price',
                    title: 'Pricing',
                    type: 'collapse',
                    icon: icons['MonetizationOnOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'price1',
                            title: 'Price 1',
                            type: 'item',
                            url: '/application/price/price1',
                        },
                        {
                            id: 'price2',
                            title: 'Price 2',
                            type: 'item',
                            url: '/application/price/price2',
                        },
                        {
                            id: 'price3',
                            title: 'Price 3',
                            type: 'item',
                            url: '/application/price/price3',
                        },
                    ],
                },
                {
                    id: 'error',
                    title: 'Error',
                    type: 'collapse',
                    icon: icons['ErrorOutlineRoundedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                    children: [
                        {
                            id: 'error1',
                            title: 'Error 1',
                            type: 'item',
                            url: '/pages/error/error1',
                            target: true,
                        },
                        {
                            id: 'error2',
                            title: 'Error 2',
                            type: 'item',
                            url: '/pages/error/error2',
                            target: true,
                        },
                    ],
                },
                {
                    id: 'comingsoon',
                    title: 'Coming soon',
                    type: 'item',
                    url: '/pages/comingsoon',
                    icon: icons['HourglassEmptyRoundedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'documentation',
                    title: 'Documentation',
                    type: 'item',
                    url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
                    icon: icons['HelpOutlineOutlinedIcon'],
                    chip: {
                        label: 'Help?',
                        color: 'primary',
                    },
                    external: true,
                    target: true,
                },
            ],
        },
        {
            id: 'utils',
            title: 'Utilities',
            type: 'group',
            icon: icons['AccountTreeOutlinedIcon'],
            children: [
                {
                    id: 'util-modal',
                    title: 'Modal',
                    type: 'item',
                    url: '/utils/util-modal',
                    icon: icons['CallToActionOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'util-tooltip',
                    title: 'Tooltip',
                    type: 'item',
                    url: '/utils/util-tooltip',
                    icon: icons['QuestionAnswerOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'util-popover',
                    title: 'Popover',
                    type: 'item',
                    url: '/utils/util-popover',
                    icon: icons['NotificationsNoneOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'util-popper',
                    title: 'Popper',
                    type: 'item',
                    url: '/utils/util-popper',
                    icon: icons['SmsOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'util-transitions',
                    title: 'Transitions',
                    type: 'item',
                    url: '/utils/util-transitions',
                    icon: icons['FilterVintageOutlinedIcon'],
                    chip: {
                        label: 'Pro',
                        error: true,
                        size: 'small',
                    },
                },
                {
                    id: 'util-icons',
                    title: 'Icons',
                    type: 'item',
                    url: '/utils/util-icons',
                    icon: icons['AppsOutlinedIcon'],
                },
                {
                    id: 'util-typography',
                    title: 'Typography',
                    type: 'item',
                    url: '/utils/util-typography',
                    icon: icons['FormatColorTextOutlinedIcon'],
                },
            ],
        },
        {
            id: 'support',
            title: 'Sidebar Features',
            type: 'group',
            icon: icons['ContactSupportOutlinedIcon'],
            children: [
                {
                    id: 'menu-level',
                    title: 'Level 0',
                    type: 'collapse',
                    icon: icons['LayersOutlinedIcon'],
                    children: [
                        {
                            id: 'menu-level-1.1',
                            title: 'Level 1',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'menu-level-2.1',
                                    title: 'Level 2',
                                    type: 'collapse',
                                    children: [
                                        {
                                            id: 'menu-level-3.1',
                                            title: 'Level 3',
                                            type: 'collapse',
                                            children: [
                                                {
                                                    id: 'menu-level-4.1',
                                                    title: 'Level 4',
                                                    type: 'collapse',
                                                    children: [
                                                        {
                                                            id: 'menu-level-5.1',
                                                            title: 'Level 5',
                                                            type: 'collapse',
                                                            children: [
                                                                {
                                                                    id: 'menu-level-6.1',
                                                                    title: 'Level 6',
                                                                    type: 'collapse',
                                                                    children: [
                                                                        {
                                                                            id: 'menu-level-7.1',
                                                                            title: 'Level 7',
                                                                            type: 'collapse',
                                                                            children: [
                                                                                {
                                                                                    id: 'menu-level-8.1',
                                                                                    title: 'Level 8',
                                                                                    type: 'item',
                                                                                    url: '#',
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'menu-level-subtitle',
                    title: 'Caption Levels',
                    caption: 'I am Subtitle',
                    type: 'collapse',
                    icon: icons['LayersOutlinedIcon'],
                    children: [
                        {
                            id: 'sub-menu-level-1.1',
                            title: 'Level 1',
                            caption: 'I am level 1 subtitle',
                            type: 'collapse',
                            children: [
                                {
                                    id: 'sub-menu-level-2.1',
                                    title: 'Level 2',
                                    caption: 'I am level 2 subtitle',
                                    type: 'item',
                                    url: '#',
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 'disabled-menu',
                    title: 'Disabled Menu',
                    type: 'item',
                    url: '#',
                    icon: icons['BlockOutlinedIcon'],
                    disabled: true,
                },
                {
                    id: 'oval-chip-menu',
                    title: 'Oval Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['FiberManualRecordOutlinedIcon'],
                    chip: {
                        label: '9',
                        color: 'primary',
                    },
                },
                {
                    id: 'rounded-chip-menu',
                    title: 'Rounded Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['EditAttributesOutlinedIcon'],
                    chip: {
                        label: 'Rounded',
                        color: 'secondary',
                    },
                },
                {
                    id: 'avatar-chip-menu',
                    title: 'Avatar Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['FaceOutlinedIcon'],
                    chip: {
                        label: 'Coded',
                        color: 'primary',
                        avatar: 'C',
                        size: 'small',
                    },
                },
                {
                    id: 'outline-chip-menu',
                    title: 'Outline Chip',
                    type: 'item',
                    url: '#',
                    icon: icons['RadioButtonUncheckedOutlinedIcon'],
                    chip: {
                        label: 'Outline',
                        variant: 'outlined',
                        color: 'primary',
                    },
                },
            ],
        },
    ],
};
