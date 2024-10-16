export interface AttributeTableData {
	title: string;
	items: AttributeTableItem[];
	attributeType: string;
}

export interface AttributeTableItem {
	proficiency: boolean;
	value: number;
	modifier: number;
	label: string;
	attributeValue: string;
}
