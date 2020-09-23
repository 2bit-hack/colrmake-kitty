import { saveAs } from 'file-saver';

const saveFile = (colors) => {
    const colorScheme = `background           ${colors['bg']}\nforeground           ${colors['fg']}\ncursor               ${colors['cursor']}\nselection_background ${colors['selBg']}\ncolor0               ${colors['color0']}\ncolor8               ${colors['color8']}\ncolor1               ${colors['color1']}\ncolor9               ${colors['color9']}\ncolor2               ${colors['color2']}\ncolor10              ${colors['color10']}\ncolor3               ${colors['color3']}\ncolor11              ${colors['color11']}\ncolor4               ${colors['color4']}\ncolor12              ${colors['color12']}\ncolor5               ${colors['color5']}\ncolor13              ${colors['color13']}\ncolor6               ${colors['color6']}\ncolor14              ${colors['color14']}\ncolor7               ${colors['color7']}\ncolor15              ${colors['color15']}\nselection_foreground ${colors['selFg']}`;
    
    let blob = new Blob([colorScheme.trim()], {type: "text/plain;charset=utf-8"});
    saveAs(blob, 'colorscheme.conf');
};

export default saveFile;