
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Nature-inspired color palette
				nature: {
					leaf: '#4CAF50',
					sky: '#03A9F4',
					earth: '#795548',
					gold: '#FFD700',
					sunset: '#FF5722'
				},
				// Fractal-inspired colors
				fractal: {
					deep: '#1A237E',
					mid: '#303F9F',
					light: '#7986CB'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'flow': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%',
						transform: 'scale(1.0)'
					},
					'50%': { 
						backgroundPosition: '100% 50%',
						transform: 'scale(1.02)' 
					}
				},
				'breathe': {
					'0%, 100%': { transform: 'scale(1.0)' },
					'50%': { transform: 'scale(1.03)' }
				},
				'golden-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'path-animation': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flow': 'flow 15s ease infinite',
				'breathe': 'breathe 4s ease-in-out infinite',
				'golden-spin': 'golden-spin 10s linear infinite',
				'path-draw': 'path-animation 2s ease-in-out forwards'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-golden': 'linear-gradient(45deg, #FFD700, #FFC107, #FF9800, #FF5722)',
				'gradient-earth': 'linear-gradient(180deg, #4CAF50 0%, #8BC34A 35%, #CDDC39 100%)',
				'gradient-cosmos': 'linear-gradient(135deg, #1A237E 0%, #303F9F 40%, #7986CB 90%)',
				'gradient-fractal': 'linear-gradient(108deg, rgba(242,245,139,1) 17.7%, rgba(148,197,20,0.68) 91.2%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
