from pathlib import Path

from loguru import logger

home_dir = Path.home()
log_dir = home_dir / "logs"
if not log_dir.exists():
    log_dir.mkdir()
log_dir = log_dir / "idexx_{time:YYYYMM}.log"
logger.add(log_dir, rotation="5 MB", retention=10, serialize=True)
