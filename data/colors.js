var colors = [
	{ name: 'INDIANRED', color: '#CD5C5C' },
	{ name: 'LIGHTCORAL', color: '#F08080' },
	{ name: 'SALMON', color: '#FA8072' },
	{ name: 'DARKSALMON', color: '#E9967A' },
	{ name: 'LIGHTSALMON', color: '#FFA07A' },
	{ name: 'CRIMSON', color: '#DC143C' },
	{ name: 'RED', color: '#FF0000' },
	{ name: 'FIREBRICK', color: '#B22222' },
	{ name: 'DARKRED', color: '#8B0000' },
	{ name: 'PINK', color: '#FFC0CB' },
	{ name: 'LIGHTPINK', color: '#FFB6C1' },
	{ name: 'HOTPINK', color: '#FF69B4' },
	{ name: 'DEEPPINK', color: '#FF1493' },
	{ name: 'MEDIUMVIOLETRED', color: '#C71585' },
	{ name: 'PALEVIOLETRED', color: '#DB7093' },
	{ name: 'LIGHTSALMON', color: '#FFA07A' },
	{ name: 'CORAL', color: '#FF7F50' },
	{ name: 'TOMATO', color: '#FF6347' },
	{ name: 'ORANGERED', color: '#FF4500' },
	{ name: 'DARKORANGE', color: '#FF8C00' },
	{ name: 'ORANGE', color: '#FFA500' },
	{ name: 'GOLD', color: '#FFD700' },
	{ name: 'YELLOW', color: '#FFFF00' },
	{ name: 'LIGHTYELLOW', color: '#FFFFE0' },
	{ name: 'LEMONCHIFFON', color: '#FFFACD' },
	{ name: 'LIGHTGOLDENRODYELLOW', color: '#FAFAD2' },
	{ name: 'PAPAYAWHIP', color: '#FFEFD5' },
	{ name: 'MOCCASIN', color: '#FFE4B5' },
	{ name: 'PEACHPUFF', color: '#FFDAB9' },
	{ name: 'PALEGOLDENROD', color: '#EEE8AA' },
	{ name: 'KHAKI', color: '#F0E68C' },
	{ name: 'DARKKHAKI', color: '#BDB76B' },
	{ name: 'LAVENDER', color: '#E6E6FA' },
	{ name: 'THISTLE', color: '#D8BFD8' },
	{ name: 'PLUM', color: '#DDA0DD' },
	{ name: 'VIOLET', color: '#EE82EE' },
	{ name: 'ORCHID', color: '#DA70D6' },
	{ name: 'FUCHSIA', color: '#FF00FF' },
	{ name: 'MAGENTA', color: '#FF00FF' },
	{ name: 'MEDIUMORCHID', color: '#BA55D3' },
	{ name: 'MEDIUMPURPLE', color: '#9370DB' },
	{ name: 'REBECCAPURPLE', color: '#663399' },
	{ name: 'BLUEVIOLET', color: '#8A2BE2' },
	{ name: 'DARKVIOLET', color: '#9400D3' },
	{ name: 'DARKORCHID', color: '#9932CC' },
	{ name: 'DARKMAGENTA', color: '#8B008B' },
	{ name: 'PURPLE', color: '#800080' },
	{ name: 'INDIGO', color: '#4B0082' },
	{ name: 'SLATEBLUE', color: '#6A5ACD' },
	{ name: 'DARKSLATEBLUE', color: '#483D8B' },
	{ name: 'MEDIUMSLATEBLUE', color: '#7B68EE' },
	{ name: 'GREENYELLOW', color: '#ADFF2F' },
	{ name: 'CHARTREUSE', color: '#7FFF00' },
	{ name: 'LAWNGREEN', color: '#7CFC00' },
	{ name: 'LIME', color: '#00FF00' },
	{ name: 'LIMEGREEN', color: '#32CD32' },
	{ name: 'PALEGREEN', color: '#98FB98' },
	{ name: 'LIGHTGREEN', color: '#90EE90' },
	{ name: 'MEDIUMSPRINGGREEN', color: '#00FA9A' },
	{ name: 'SPRINGGREEN', color: '#00FF7F' },
	{ name: 'MEDIUMSEAGREEN', color: '#3CB371' },
	{ name: 'SEAGREEN', color: '#2E8B57' },
	{ name: 'FORESTGREEN', color: '#228B22' },
	{ name: 'GREEN', color: '#008000' },
	{ name: 'DARKGREEN', color: '#006400' },
	{ name: 'YELLOWGREEN', color: '#9ACD32' },
	{ name: 'OLIVEDRAB', color: '#6B8E23' },
	{ name: 'OLIVE', color: '#808000' },
	{ name: 'DARKOLIVEGREEN', color: '#556B2F' },
	{ name: 'MEDIUMAQUAMARINE', color: '#66CDAA' },
	{ name: 'DARKSEAGREEN', color: '#8FBC8B' },
	{ name: 'LIGHTSEAGREEN', color: '#20B2AA' },
	{ name: 'DARKCYAN', color: '#008B8B' },
	{ name: 'TEAL', color: '#008080' },
	{ name: 'AQUA', color: '#00FFFF' },
	{ name: 'CYAN', color: '#00FFFF' },
	{ name: 'LIGHTCYAN', color: '#E0FFFF' },
	{ name: 'PALETURQUOISE', color: '#AFEEEE' },
	{ name: 'AQUAMARINE', color: '#7FFFD4' },
	{ name: 'TURQUOISE', color: '#40E0D0' },
	{ name: 'MEDIUMTURQUOISE', color: '#48D1CC' },
	{ name: 'DARKTURQUOISE', color: '#00CED1' },
	{ name: 'CADETBLUE', color: '#5F9EA0' },
	{ name: 'STEELBLUE', color: '#4682B4' },
	{ name: 'LIGHTSTEELBLUE', color: '#B0C4DE' },
	{ name: 'POWDERBLUE', color: '#B0E0E6' },
	{ name: 'LIGHTBLUE', color: '#ADD8E6' },
	{ name: 'SKYBLUE', color: '#87CEEB' },
	{ name: 'LIGHTSKYBLUE', color: '#87CEFA' },
	{ name: 'DEEPSKYBLUE', color: '#00BFFF' },
	{ name: 'DODGERBLUE', color: '#1E90FF' },
	{ name: 'CORNFLOWERBLUE', color: '#6495ED' },
	{ name: 'MEDIUMSLATEBLUE', color: '#7B68EE' },
	{ name: 'ROYALBLUE', color: '#4169E1' },
	{ name: 'BLUE', color: '#0000FF' },
	{ name: 'MEDIUMBLUE', color: '#0000CD' },
	{ name: 'DARKBLUE', color: '#00008B' },
	{ name: 'NAVY', color: '#000080' },
	{ name: 'MIDNIGHTBLUE', color: '#191970' },
	{ name: 'CORNSILK', color: '#FFF8DC' },
	{ name: 'BLANCHEDALMOND', color: '#FFEBCD' },
	{ name: 'BISQUE', color: '#FFE4C4' },
	{ name: 'NAVAJOWHITE', color: '#FFDEAD' },
	{ name: 'WHEAT', color: '#F5DEB3' },
	{ name: 'BURLYWOOD', color: '#DEB887' },
	{ name: 'TAN', color: '#D2B48C' },
	{ name: 'ROSYBROWN', color: '#BC8F8F' },
	{ name: 'SANDYBROWN', color: '#F4A460' },
	{ name: 'GOLDENROD', color: '#DAA520' },
	{ name: 'DARKGOLDENROD', color: '#B8860B' },
	{ name: 'PERU', color: '#CD853F' },
	{ name: 'CHOCOLATE', color: '#D2691E' },
	{ name: 'SADDLEBROWN', color: '#8B4513' },
	{ name: 'SIENNA', color: '#A0522D' },
	{ name: 'BROWN', color: '#A52A2A' },
	{ name: 'MAROON', color: '#800000' },
	{ name: 'WHITE', color: '#FFFFFF' },
	{ name: 'SNOW', color: '#FFFAFA' },
	{ name: 'HONEYDEW', color: '#F0FFF0' },
	{ name: 'MINTCREAM', color: '#F5FFFA' },
	{ name: 'AZURE', color: '#F0FFFF' },
	{ name: 'ALICEBLUE', color: '#F0F8FF' },
	{ name: 'GHOSTWHITE', color: '#F8F8FF' },
	{ name: 'WHITESMOKE', color: '#F5F5F5' },
	{ name: 'SEASHELL', color: '#FFF5EE' },
	{ name: 'BEIGE', color: '#F5F5DC' },
	{ name: 'OLDLACE', color: '#FDF5E6' },
	{ name: 'FLORALWHITE', color: '#FFFAF0' },
	{ name: 'IVORY', color: '#FFFFF0' },
	{ name: 'ANTIQUEWHITE', color: '#FAEBD7' },
	{ name: 'LINEN', color: '#FAF0E6' },
	{ name: 'LAVENDERBLUSH', color: '#FFF0F5' },
	{ name: 'MISTYROSE', color: '#FFE4E1' },
	{ name: 'GAINSBORO', color: '#DCDCDC' },
	{ name: 'LIGHTGRAY', color: '#D3D3D3' },
	{ name: 'SILVER', color: '#C0C0C0' },
	{ name: 'DARKGRAY', color: '#A9A9A9' },
	{ name: 'GRAY', color: '#808080' },
	{ name: 'DIMGRAY', color: '#696969' },
	{ name: 'LIGHTSLATEGRAY', color: '#778899' },
	{ name: 'SLATEGRAY', color: '#708090' },
	{ name: 'DARKSLATEGRAY', color: '#2F4F4F' },
	{ name: 'BLACK', color: '#000000' }
]
