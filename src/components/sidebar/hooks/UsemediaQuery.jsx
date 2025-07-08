import React, { useState, useEffect } from 'react'

const UsemediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches || false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const listener = (e) => {
            setMatches(e.matches)
        };
        mediaQueryList.addEventListener('change', listener);
        return() => {
            mediaQueryList.removeEventListener('change', listener);
        }
    }, [query])

  return {matches}
}

export default UsemediaQuery