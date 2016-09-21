(function() {
    'use strict';
    var appName;

    module.exports = {
        buildCss: function (appName) {
            var css =
`.mainContent {
    margin: 0 auto;
    margin-top: 85px;
}
    .mainContent ul {
        padding: 0;
        list-style: none;
    }
`;
            return css;
        }
    }
}());
