from sys import argv
from pathlib import Path
import os
import shutil

SRC = Path(__file__).parent.parent / "src"


def get_common_files():
    for (directory, subdirectories, file_names) in os.walk(SRC):
        for file_name in file_names:
            if file_name == "manifest-firefox.json":
                continue
            if file_name == "manifest-chrome.json":
                continue
            if file_name == "manifest-firefox-dev.json":
                continue
            yield Path(directory) / file_name


def get_target_directory():
    return Path(argv[1])


def copy_files(files, destination_root):
    for file in files:
        destination = destination_root / file.parent.relative_to(SRC)
        if not destination.is_dir():
            os.makedirs(destination)
        shutil.copy(file, destination)


def copy_file(file, new_name, destination):
    if not destination.is_dir():
        os.makedirs(destination)
    shutil.copyfile(file, destination / new_name)


if __name__ == "__main__":
    target = get_target_directory()
    shutil.rmtree(target)
    copy_files(get_common_files(), target)
    copy_file(SRC / "manifest-firefox-dev.json", "manifest.json", target)
