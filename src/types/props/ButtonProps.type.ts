import type { ReactNode } from 'react';

export interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
}
