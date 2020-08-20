import * as React from 'react';
import { LinkMaker } from 'expo-navigation-core';
const Link = React.forwardRef((props, ref) => {
    const L = LinkMaker(); // we have to do this to be able to forward refs 🙃
    return <L {...props} ref={ref}/>;
});
export default Link;
//# sourceMappingURL=index.js.map