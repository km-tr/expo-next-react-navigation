import { useCallback } from 'react';
import _ from 'lodash';
import Router, { useRouter } from 'next/router';
import empty from '../../utils/empty';
const goBack = () => Router.back();
const popToTop = () => { };
const setParams = (a) => { };
export default function useRouting() {
    const router = useRouter();
    const getParam = (param, fallback) => {
        if (!router) {
            return undefined;
        }
        const val = _.get(router.query, param) ?? fallback;
        // if (val === undefined) {
        //   console.warn('Tried to get param', param, 'but it does not exist')
        // }
        return val;
    };
    const navigate = useCallback(({ routeName, web, params = empty.object, }) => {
        const webPath = web?.path?.[0] === '/' ? web?.path?.slice(1) : web?.path;
        const pathname = `/${webPath ?? routeName}`;
        Router.push({
            pathname,
            query: { ...params },
        }, web?.as);
    }, []);
    const replace = useCallback(({ routeName, web, params = empty.object, }) => {
        const webPath = web?.path?.[0] === '/' ? web?.path?.slice(1) : web?.path;
        const pathname = `/${webPath ?? routeName}`;
        Router.replace({
            pathname,
            query: { ...params },
        }, web?.as);
    }, []);
    return {
        getParam,
        navigate,
        push: navigate,
        goBack,
        popToTop,
        prefetch: router.prefetch,
        replace,
        setParams,
    };
}
//# sourceMappingURL=index.web.js.map