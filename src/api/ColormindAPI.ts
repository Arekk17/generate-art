// ColormindAPI.ts

interface Color {
  r: number;
  g: number;
  b: number;
}

class ColormindAPI {
  static async getGeneratedColors(): Promise<Color[]> {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/http://colormind.io/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "default",
        }),
      });

      const data = await response.json();
      return data.result.map((color: number[]) => {
        return { r: color[0], g: color[1], b: color[2] };
      });
    } catch (error) {
      console.error('Error generating colors:', error);
      throw error;
    }
  }
}

export default ColormindAPI;
