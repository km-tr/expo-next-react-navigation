import { useEffect } from 'react';
export default function useFocusEffect(callback) {
    return useEffect(callback, [callback]);
}
//# sourceMappingURL=index.web.js.map