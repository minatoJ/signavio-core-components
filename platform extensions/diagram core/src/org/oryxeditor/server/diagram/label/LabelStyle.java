/*******************************************************************************
 * Signavio Core Components
 * Copyright (C) 2012  Signavio GmbH
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
package org.oryxeditor.server.diagram.label;

import java.awt.Color;

/**
 * Contains information about font and background color of a label
 * @author philipp.maschke
 *
 */
public class LabelStyle {
	
	private String fontFamily; //TODO make as enum?
	private Double fontSize;
	private boolean bold;
	private boolean italic;
	private Color fill;
	
	
	public String getFontFamily() {
		return fontFamily;
	}
	
	public void setFontFamily(String fontFamily) {
		this.fontFamily = fontFamily;
	}
	
	public Double getFontSize() {
		return fontSize;
	}
	
	public void setFontSize(Double fontSize) {
		this.fontSize = fontSize;
	}
	
	public Color getFill() {
		return fill;
	}
	
	public void setFill(Color fill) {
		this.fill = fill;
	}

	
	public boolean isBold() {
		return bold;
	}
	public void setBold(boolean bold) {
		this.bold = bold;
	}

	
	public boolean isItalic() {
		return italic;
	}
	public void setItalic(boolean italic) {
		this.italic = italic;
	}
	
}
