import type { ReactNode } from 'react';

export interface RouterProps {
	routes: Record<string, () => ReactNode>;
}
