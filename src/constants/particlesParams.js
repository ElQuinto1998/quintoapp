export const particles = {
    number: {
        value: 45,
        density: {
            enable: true,
            value_area: 900
        }
    },
    shape: {
        type: 'star',
        stroke: {
            width: 1,
            color: 'tomato'
        }
    },
    size: {
        value: 8,
        random: true,
        anim: {
            enable: true,
            speed: 7,
            size_min: 0.1,
            sync: true
        }
    },
    opacity: {
        value: 1,
        random: true,
        anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: true
        }
    }
};
